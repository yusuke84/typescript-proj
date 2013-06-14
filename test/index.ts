/// <reference path="../src/index.ts" />
/// <reference path="../d.ts/mocha/mocha.d.ts" />
/// <reference path="../d.ts/chai/chai.d.ts" />

describe('index', () => {
    var expect = chai.expect;
    it('has text `Hello TypeScript!`', () => {
        var index = new Index.HelloWorld();
        expect(index.text()).to.equal('Hello TypeScript!');
    });
});
