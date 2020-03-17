'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    OK: 200,
  };

  var load = function (onLoad, onError) {
    var xhr = createXHR(onLoad, onError, {
      type: 'json',
      timeout: TIMEOUT_IN_MS,
    });

    xhr.open('GET', URL + '/data');
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = createXHR(onLoad, onError, {
      type: 'json',
      timeout: TIMEOUT_IN_MS,
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var createXHR = function (onLoad, onError, options) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = options.type;
    xhr.timeout = options.timeout;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(xhr.status + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  window.backend = {
    load: load,
    save: save,
  };

})();
