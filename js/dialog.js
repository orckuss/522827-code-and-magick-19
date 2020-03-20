'use strict';

(function () {
  var setupDialog = document.querySelector('.setup');
  var openSetupButton = document.querySelector('.setup-open');
  var closeSetupButton = setupDialog.querySelector('.setup-close');
  var setupInputName = setupDialog.querySelector('.setup-user-name');

  var dialogHandler = setupDialog.querySelector('.upload');
  var startPosition;

  var onEscPressed = function (evt) {
    window.utility.onEscPressed(evt, hideSetupWindow, setupInputName);
  };

  var showSetupWindow = function () {
    setupDialog.classList.remove('hidden');
    document.addEventListener('keydown', onEscPressed);

    startPosition = {
      top: setupDialog.offsetTop,
      left: setupDialog.offsetLeft,
    };
  };

  var hideSetupWindow = function () {
    setupDialog.style.top = startPosition.top + 'px';
    setupDialog.style.left = startPosition.left + 'px';

    setupDialog.classList.add('hidden');
    document.removeEventListener('keydown', onEscPressed);
  };

  openSetupButton.addEventListener('click', function () {
    showSetupWindow();
  });

  openSetupButton.addEventListener('keydown', function (evt) {
    window.utility.onEnterPressed(evt, showSetupWindow);
  });

  closeSetupButton.addEventListener('click', function () {
    hideSetupWindow();
  });

  closeSetupButton.addEventListener('keydown', function (evt) {
    window.utility.onEnterPressed(evt, hideSetupWindow);
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialog.style.top = (setupDialog.offsetTop - shift.y) + 'px';
      setupDialog.style.left = (setupDialog.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialog = {
    show: showSetupWindow,
    hide: hideSetupWindow,
  };

})();
