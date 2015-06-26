'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sourceMapSupport = require('source-map-support');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

(0, _sourceMapSupport.install)();

var baseUrl = 'http://api.redtube.com/?data=redtube.';

var Redtube = (function () {
  function Redtube(properties) {
    _classCallCheck(this, Redtube);

    this.properties = properties;
  }

  _createClass(Redtube, [{
    key: 'search',
    value: function search(opts) {
      _request2['default'].get(baseUrl + 'Videos.searchVideos&output=' + this.properties.output + opts, function (err, body, response) {
        console.log(err, body, response);
      });
    }
  }]);

  return Redtube;
})();

exports['default'] = Redtube;
module.exports = exports['default'];
//# sourceMappingURL=app.js.map