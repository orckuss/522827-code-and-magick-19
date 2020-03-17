'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var wizardCoat = form.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = form.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = form.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.utility
      .getRandomValueFromMock(window.mocks.coatColors);

    form.querySelector('input[name="coat-color"]')
      .value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.utility
      .getRandomValueFromMock(window.mocks.eyesColors);

    form.querySelector('input[name="eyes-color"]')
      .value = wizardEyes.style.fill;
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.utility.getRandomValueFromMock(window.mocks.fireballColors);
    wizardFireball.style.backgroundColor = color;

    form.querySelector('input[name="fireball-color"]')
      .value = color;
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.dialog.hide();
    });
  });

})();
