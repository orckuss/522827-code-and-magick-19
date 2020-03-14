'use strict';

(function () {
  var PLAYERS_COUNT = 4;

  var similarSection = document.querySelector('.setup-similar');
  var wizardList = similarSection.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var generatePlayers = function (count) {
    var players = [];

    for (var i = 0; i < count; i++) {
      players.push({
        name: window.utility.getRandomValueFromMock(window.mocks.names) + ' ' + window.utility.getRandomValueFromMock(window.mocks.lastNames),
        coatColor: window.utility.getRandomValueFromMock(window.mocks.coatColors),
        eyesColor: window.utility.getRandomValueFromMock(window.mocks.eyesColors),
      });
    }

    return players;
  };

  var createWizardFromTemplate = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizard.name;

    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizard.coatColor;

    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (players) {
    if (players) {
      similarSection.classList.remove('hidden');

      players.forEach(function (player) {
        fragment.append(createWizardFromTemplate(player));
      });

      wizardList.append(fragment);
    }
  };

  renderWizards(generatePlayers(PLAYERS_COUNT));
})();
