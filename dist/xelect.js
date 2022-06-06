/**
 * Xelect
 * 
 * version: 0.1.0
 */

(function(factory, window, document) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(window, document);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(() => {
            return factory(window, document);
        });
    } else {
        window.Xelect = factory(window, document);
    }
}(function(window, document) {
    'use strict';

    function noop() {}

    // Default options
    const defaults = {
        // Classes for styling
        classes: {
            xelect: 'xelect'
        }
    };

    class Xelect {
        constructor(opts) {
                const self = this;

                return self;
            }
            /**
             * Destroy this Xelect instance.
             *
             * @returns {Xelect} This instance.
             */
        destroy() {
            const self = this;

            return self;
        }

        /**
         * Get the current version.
         */
        static get version() {
            return '0.1.0';
        }
    }

    return Xelect;
}, window, document));