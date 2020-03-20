'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var DEBOUNCE_INTERVAL = 500;

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

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utility = {
    getRandomValueFromMock: getRandomValueFromMock,
    onEscPressed: onEscapePressed,
    onEnterPressed: onEnterPressed,
    debounce: debounce,
  };
})();
