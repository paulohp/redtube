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

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

(0, _sourceMapSupport.install)();

var baseUrl = 'http://api.redtube.com/?data=redtube.';

var Redtube = (function () {
  function Redtube(properties) {
    _classCallCheck(this, Redtube);

    if (!properties || properties.output === undefined) properties.output = 'json';
    this.properties = properties;
  }

  _createClass(Redtube, [{
    key: 'search',
    value: function search(opts, cb) {
      var output = this.properties.output + '&';
      var querystring = _qs2['default'].stringify(opts);
      var url = baseUrl + 'Videos.searchVideos&output=' + output + querystring;

      _request2['default'].get(url, function (err, response, body) {
        if (cb) {
          if (err) {
            return cb(err, null);
          }
          return cb(null, JSON.parse(response.body));
        }
      });
    }
  }, {
    key: 'getVideoById',
    value: function getVideoById(opts, cb) {
      var output = this.properties.output + '&';
      var querystring = _qs2['default'].stringify(opts);
      var url = baseUrl + 'Videos.getVideoById&output=' + output + querystring;

      _request2['default'].get(url, function (err, response, body) {
        if (cb) {
          if (err) {
            return cb(err, null);
          }
          return cb(null, JSON.parse(response.body));
        }
      });
    }
  }, {
    key: 'getVideoEmbedCode',
    value: function getVideoEmbedCode(id, cb) {
      var output = this.properties.output + '&';
      var querystring = _qs2['default'].stringify({ video_id: id });
      var url = baseUrl + 'Videos.getVideoEmbedCode&output=' + output + querystring;

      _request2['default'].get(url, function (err, response, body) {
        if (cb) {
          if (err) {
            return cb(err, null);
          }
          return cb(null, JSON.parse(response.body));
        }
      });
    }
  }]);

  return Redtube;
})();

exports['default'] = Redtube;
module.exports = exports['default'];
//# sourceMappingURL=app.js.map