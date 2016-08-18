require([
    'dojo/dom-construct',

    'matchers/dom'

], function (
    domConstruct
) {
    describe('matchers/Dom', function () {
        it('matches visible elements', function () {
            var div = domConstruct.create('div', null, document.body);

            expect(div).toBeVisible();

            domConstruct.destroy(div);
        });
        it('matches hidden elements', function () {
            var div = domConstruct.create('div', {
                style: {visibility: 'hidden'}
            }, document.body);
            var div2 = domConstruct.create('div', {
                style: {display: 'none'}
            }, document.body);

            expect(div).not.toBeVisible();
            expect(div2).not.toBeVisible();

            domConstruct.destroy(div);
            domConstruct.destroy(div2);
        });
    });
});
