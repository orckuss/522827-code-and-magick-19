'use strict';

var POPUP_X = 100;
var POPUP_Y = 10;
var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 270;
var POPUP_FILL_COLOR = '#ffffff';

var SHADOW_SHIFT = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var FONT_SIZE = 16;
var FONT_LINE_HEIGHT = FONT_SIZE * 1.3;
var FONT_FAMILY = 'PT Mono';
var FONT_COLOR = '#000000';
var FONT_SHIFT = 30;

var CHART_COLUMN_WIDTH = 40;
var CHART_COLUMN_HEIGHT = 150;
var CHART_COLUMN_GAP = 50;

var PLAYER_CHART_COLOR = 'rgba(255, 0, 0, 1)';

var renderPopup = function (canvasContext, x, y, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, POPUP_WIDTH, POPUP_HEIGHT);
};

var renderText = function (canvasContext, text, x, y) {
  canvasContext.font = FONT_SIZE + 'px ' + FONT_FAMILY;
  canvasContext.textBaseline = 'hanging';
  canvasContext.fillStyle = FONT_COLOR;
  canvasContext.fillText(text, x, y);
};

var getRandomBlueHue = function () {
  return 'hsl(240, 100%, ' + Math.round(Math.random() * 100) + '%)';
};

var getMaxPlayersTime = function (playersTimes) {
  return playersTimes.reduce(function (previosValue, currentValue) {
    return currentValue > previosValue ? currentValue : previosValue;
  });
};

var renderChart = function (canvasContext, playersNames, playersTimes) {
  var chartColumnShift = CHART_COLUMN_WIDTH + CHART_COLUMN_GAP;

  var maxTime = getMaxPlayersTime(playersTimes);

  playersTimes.forEach(function (value, index) {
    var height = Math.round(value * CHART_COLUMN_HEIGHT / maxTime);
    var x = POPUP_X + CHART_COLUMN_GAP + chartColumnShift * index;
    var y = POPUP_HEIGHT - height - FONT_LINE_HEIGHT;

    canvasContext.fillStyle = playersNames[index] === 'Вы' ? PLAYER_CHART_COLOR : getRandomBlueHue();
    canvasContext.fillRect(x, y, CHART_COLUMN_WIDTH, height);

    renderText(canvasContext, value, x, y - FONT_LINE_HEIGHT);
    renderText(canvasContext, playersNames[index], x, POPUP_HEIGHT - FONT_SIZE);
  });

};

window.renderStatistics = function (canvasContext, playersNames, playersTimes) {
  playersTimes = playersTimes.map(function (time) {
    return Math.round(time);
  });

  renderPopup(canvasContext, POPUP_X + SHADOW_SHIFT, POPUP_Y + SHADOW_SHIFT, SHADOW_COLOR);
  renderPopup(canvasContext, POPUP_X, POPUP_Y, POPUP_FILL_COLOR);

  renderText(canvasContext, 'Ура вы победили!', POPUP_X + FONT_SHIFT, POPUP_Y + FONT_SHIFT);
  renderText(canvasContext, 'Список результатов:', POPUP_X + FONT_SHIFT, POPUP_Y + FONT_SHIFT + FONT_SIZE);

  renderChart(canvasContext, playersNames, playersTimes);

};
