'use strict';

(function () {
  var setupDialog = document.querySelector('.setup');

  var wizardCoat = setupDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setupDialog.querySelector('.setup-fireball-wrap');

  var inputName = setupDialog.querySelector('.setup-user-name');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.utility
      .getRandomValueFromMock(window.mocks.coatColors);

    setupDialog.querySelector('input[name="coat-color"]')
      .value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.utility
      .getRandomValueFromMock(window.mocks.eyesColors);

    setupDialog.querySelector('input[name="eyes-color"]')
      .value = wizardEyes.style.fill;
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.utility.getRandomValueFromMock(window.mocks.fireballColors);
    wizardFireball.style.backgroundColor = color;

    setupDialog.querySelector('input[name="fireball-color"]')
      .value = color;
  });

  window.wizardSettings = {
    name: inputName.value,
    coatColor: wizardCoat.style.fill,
    eyesColor: wizardEyes.style.fill,
    fireballColor: wizardFireball.style.backgroundColor,
  };

})();
