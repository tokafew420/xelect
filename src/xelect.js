/**
 * Xelect
 * 
 * version: 1.0.0
 */

(function (factory, window, document) {
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
}(function (window, document) {
    'use strict';

    function noop() { }
    const contains = (text, search) => {
        return text.indexOf(search) !== -1;
    };
    // Default options
    const defaults = {
        // Classes for styling
        classes: {
            xelect: 'xelect'
        }
    };

    class Xelect {
        constructor(id) {
            const self = this;

            const select = document.querySelector(id);
            console.log(id, select);
            select.style.display = "none";
            var input = document.createElement("input");
            select.parentNode.insertBefore(input, select);
            var list = document.createElement("ul");
            list.style.display = "none";
            input.after(list);
            input.addEventListener("focus", function (e) {
                list.style.display = "block";
            });
            input.addEventListener("blur", function (e) {
                list.style.display = "none";
            });
            input.addEventListener("keyup", function (e) {
                var x = input.value;
                x= x.toLowerCase();
                self.options.forEach((i) => {
                    if (contains (i.innerText.toLowerCase(),x)) {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";

                    }
                });

            });

            var options = document.querySelectorAll(id + " option");
            self.options = [];
            for (var o of options) {

                let i = document.createElement("li");
                i.innerText = o.innerText;
                list.append(i);
                self.options.push(i);
            }




            return self;
        }
        /**
         * Destroy this Xelect instance.
         *
         * @returns {Xelect} This instance.
         */
        getOptions() {
            const self = this;

            return self.options;
        }

        /**
         * Get the current version.
         */
        static get version() {
            return 'dog';
        }
    }

    return Xelect;
}, window, document));