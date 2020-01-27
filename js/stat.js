'use strict';

var POPUP_X = 100;
var POPUP_Y = 10;
var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 270;
var POPUP_FILL_COLOR = '#ffffff';

var SHADOW_SHIFT = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';
var FONT_COLOR = '#000000';
var FONT_SHIFT = 30;

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

window.renderStatistics = function (canvasContext) {
  renderPopup(canvasContext, POPUP_X + SHADOW_SHIFT, POPUP_Y + SHADOW_SHIFT, SHADOW_COLOR);
  renderPopup(canvasContext, POPUP_X, POPUP_Y, POPUP_FILL_COLOR);

  renderText(canvasContext, 'Ура вы победили!', POPUP_X + FONT_SHIFT, POPUP_Y + FONT_SHIFT);
  renderText(canvasContext, 'Список результатов:', POPUP_X + FONT_SHIFT, POPUP_Y + FONT_SHIFT + FONT_SIZE);
};
