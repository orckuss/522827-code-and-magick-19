'use strict';

(function () {
  var PLAYERS_COUNT = 4;

  var similarSection = document.querySelector('.setup-similar');
  var wizardList = similarSection.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var createWizardFromTemplate = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizard.name;

    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizard.colorCoat;

    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (players, count) {
    if (players) {
      similarSection.classList.remove('hidden');

      players.slice(0, count).forEach(function (player) {
        fragment.append(createWizardFromTemplate(player));
      });

      wizardList.append(fragment);
    }
  };

  var onSuccess = function (response) {
    renderWizards(response, PLAYERS_COUNT);
  };

  window.backend.load(onSuccess);

})();
