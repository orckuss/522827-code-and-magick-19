'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var getRandomValueFromMock = function (mock) {
    var lastIndex = mock.length - 1;
    return mock[Math.round(Math.random() * lastIndex)];
  };

  var onEscapePressed = function (evt, action, element) {
    if (
      (evt.key === ESC_KEY) &&
      (evt.target !== element)
    ) {
      action();
    }
  };

  var onEnterPressed = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };

  window.utility = {
    getRandomValueFromMock: getRandomValueFromMock,
    onEscPressed: onEscapePressed,
    onEnterPressed: onEnterPressed,
  };
})();
