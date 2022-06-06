"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Xelect
 * 
 * version: 0.1.0
 */
(function (factory, window, document) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    module.exports = factory(window, document);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {
      return factory(window, document);
    });
  } else {
    window.Xelect = factory(window, document);
  }
})(function (window, document) {
  'use strict';

  function noop() {} // Default options


  var defaults = {
    // Classes for styling
    classes: {
      xelect: 'xelect'
    }
  };

  var Xelect = /*#__PURE__*/function () {
    function Xelect(opts) {
      _classCallCheck(this, Xelect);

      var self = this;
      return self;
    }
    /**
     * Destroy this Xelect instance.
     *
     * @returns {Xelect} This instance.
     */


    _createClass(Xelect, [{
      key: "destroy",
      value: function destroy() {
        var self = this;
        return self;
      }
      /**
       * Get the current version.
       */

    }], [{
      key: "version",
      get: function get() {
        return '0.1.0';
      }
    }]);

    return Xelect;
  }();

  return Xelect;
}, window, document);