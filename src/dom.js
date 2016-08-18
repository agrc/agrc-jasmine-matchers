define([
    'dojo/dom-style'
], function (
    domStyle
) {
    beforeEach(function () {
        jasmine.addMatchers(matchers);
    });

    var matchers = {
        toBeVisible: function () {
            return {
                compare: function (node) {
                    var pass = domStyle.get(node, 'visibility') !== 'hidden' &&
                        domStyle.get(node, 'display') !== 'none';
                    var msg = 'Expected ' + node;
                    if (pass) {
                        msg += ' not';
                    }
                    msg += ' to be visible';

                    return {
                        pass: pass,
                        message: msg
                    };
                }
            };
        }
    };
});
