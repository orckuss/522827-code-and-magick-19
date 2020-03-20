'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var wizardCoat = form.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = form.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = form.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var color = window.utility.getRandomValueFromMock(window.mocks.coatColors);
    wizardCoat.style.fill = color;
    form.querySelector('input[name="coat-color"]').value = color;
    wizard.onCoatChange(color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.utility.getRandomValueFromMock(window.mocks.eyesColors);
    wizardEyes.style.fill = color;
    form.querySelector('input[name="eyes-color"]').value = color;
    wizard.onEyesChange(color);
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.utility.getRandomValueFromMock(window.mocks.fireballColors);
    wizardFireball.style.backgroundColor = color;
    form.querySelector('input[name="fireball-color"]').value = color;
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.dialog.hide();
    });
  });

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {},
  };

  window.wizardSettings = wizard;

})();
