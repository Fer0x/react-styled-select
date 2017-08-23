(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', '../defaults.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('../defaults.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.defaults);
    global.SelectPlaceholder = mod.exports;
  }
})(this, function (exports, _styledComponents, _defaults) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _defaults2 = _interopRequireDefault(_defaults);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  bottom: 0;\n  font-size: 12px;\n  font-size: var(--styled-select-placeholder-font-size, 12px);\n  font-family: ', ';\n  font-family: var(--styled-select-placeholder-font-family, ', ');\n  color: #d2d2d9;\n  color: var(--styled-select-placeholder-color, #d2d2d9);\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n'], ['\n  bottom: 0;\n  font-size: 12px;\n  font-size: var(--styled-select-placeholder-font-size, 12px);\n  font-family: ', ';\n  font-family: var(--styled-select-placeholder-font-family, ', ');\n  color: #d2d2d9;\n  color: var(--styled-select-placeholder-color, #d2d2d9);\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.fontFamily, _defaults2.default.fontFamily);
});
//# sourceMappingURL=SelectPlaceholder.js.map