'use strict';

(function () {
  var setupDialog = document.querySelector('.setup');
  var openSetupButton = document.querySelector('.setup-open');
  var closeSetupButton = setupDialog.querySelector('.setup-close');
  var setupInputName = setupDialog.querySelector('.setup-user-name');

  var onEscPressed = function (evt) {
    window.utility.onEscPressed(evt, hideSetupWindow, setupInputName);
  };

  var showSetupWindow = function () {
    setupDialog.classList.remove('hidden');
    document.addEventListener('keydown', onEscPressed);
  };

  var hideSetupWindow = function () {
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

})();
