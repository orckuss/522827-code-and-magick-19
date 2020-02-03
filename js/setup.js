'use strict';

var PLAYERS_COUNT = 4;

var NAMES_MOCK = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Кристоф',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var LAST_NAMES_MOCK = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var COAT_COLORS_MOCK = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYES_COLORS_MOCK = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var getRandomValueFromMock = function (mock) {
  var lastIndex = mock.length - 1;
  return mock[Math.round(Math.random() * lastIndex)];
};

var generatePlayers = function (count) {
  var players = [];

  for (var i = 0; i < count; i++) {
    players.push({
      name: getRandomValueFromMock(NAMES_MOCK) + ' ' + getRandomValueFromMock(LAST_NAMES_MOCK),
      coatColor: getRandomValueFromMock(COAT_COLORS_MOCK),
      eyesColor: getRandomValueFromMock(EYES_COLORS_MOCK),
    });
  }

  return players;
};

var createWizardFromTemplate = function (wizard) {
  var wizardElement = document
    .querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item')
    .cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat')
    .style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes')
    .style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (players) {
  var wizardList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  players.forEach(function (player) {
    fragment.appendChild(createWizardFromTemplate(player));
  });

  wizardList.appendChild(fragment);
};

var players = generatePlayers(PLAYERS_COUNT);

renderWizards(players);

var setupDialog = document.querySelector('.setup');
var openSetupButton = document.querySelector('.setup-open');
var closeSetupButton = setupDialog.querySelector('.setup-close');
var setupInputName = setupDialog.querySelector('.setup-user-name');

var onEscPressed = function (evt) {
  if ((evt.key === ESC_KEY) && (document.activeElement !== setupInputName)) {
    hideSetupWindow();
  }
};

var showSetupWindow = function () {
  setupDialog.classList.remove('hidden');
  setupDialog.querySelector('.setup-similar')
    .classList.remove('hidden');

  document.addEventListener('keydown', onEscPressed);
};

var hideSetupWindow = function () {
  setupDialog.classList.add('hidden');
  setupDialog.querySelector('.setup-similar')
    .classList.add('hidden');

  document.removeEventListener('keydown', onEscPressed);
};

openSetupButton.addEventListener('click', function () {
  showSetupWindow();
});

openSetupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    showSetupWindow();
  }
});

closeSetupButton.addEventListener('click', function () {
  hideSetupWindow();
});

closeSetupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    hideSetupWindow();
  }
});
