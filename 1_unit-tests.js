const chai = require('chai');
const assert = chai.assert;

describe('Unit Tests', function () {
    describe('Basic Assertions', function () {
        // #1
        it('#isNull, #isNotNull', function () {
            assert.isNull(null);
            assert.isNotNull(1);
        });
        // #2
        it('#isDefined, #isUndefined', function () {
            assert.isDefined(null);
            assert.isUndefined(undefined);
            assert.isDefined('hello');
        });
        // #3
        it('#isOk, #isNotOk', function () {
            assert.isNotOk(null);
            assert.isOk("I'm truthy");
            assert.isOk(true);
        });
        // #4
        it('#isTrue, #isNotTrue', function () {
            assert.isTrue(true);
            assert.isTrue(!!'double negation');
            assert.isNotTrue({ value: 'truthy' });
        });
    });

    // -----------------------------------------------------------------------------

    describe('Equality', function () {
        // #5
        it('#equal, #notEqual', function () {
            assert.equal(12, '12');
            assert.notEqual({ value: 1 }, { value: 1 });
            assert.equal(6 * '2', 12);
            assert.notEqual(6 + '2', 12);
        });
        // #6
        it('#strictEqual, #notStrictEqual', function () {
            assert.strictEqual(6, 3 * 2);
            assert.notStrictEqual(6, '6');
            assert.notStrictEqual(6 * '2', 13);
            
        });
        // #7
        it('#deepEqual, #notDeepEqual', function () {
            assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' });
            assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] });
        });
    });

    // -----------------------------------------------------------------------------

    function weirdNumbers(delta) {
        return 1 + delta - Math.random();
    }

    describe('Comparisons', function () {
        // #8
        it('#isAbove, #isAtMost', function () {
            assert.isAbove('hello'.length, 4);
            assert.isAtMost(1, 1);
            assert.isAbove(Math.PI, 3);
            assert.isAtLeast(1 - Math.random(), 0);
        });
        // #9
        it('#isBelow, #isAtLeast', function () {
            assert.isBelow('world'.length, 6);
            assert.isAtLeast(2 * Math.random(), 0);
            assert.isBelow(5 % 2, 2);
            assert.isAtLeast(2 / 3, 0.66);
        });
        // #10
        it('#approximately', function () {
            assert.approximately(weirdNumbers(0.5), 1, 1);
            assert.approximately(weirdNumbers(0.2), 1, 1);
        });
    });

    // -----------------------------------------------------------------------------

    const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
    const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
    describe('Arrays', function () {
        // #11
        it('#isArray, #isNotArray', function () {
            assert.isArray('isThisAnArray?'.split(''));
            assert.isNotArray([1, 2, 3].indexOf(2));
        });
        // #12
        it('Array #include, #notInclude', function () {
            assert.include(winterMonths, 'jan');
            assert.notInclude(backendLanguages, 'java');
        });
    });

    // -----------------------------------------------------------------------------

    const formatPeople = function (name, age) {
        return '# name: ' + name + ', age: ' + age + '\n';
    };
    describe('Strings', function () {
        // #13
        it('#isString, #isNotString', function () {
            assert.isString(Math.sin(Math.PI / 4).toString());
            assert.isString(process.env.PATH || '');
            assert.isString(JSON.stringify({ type: 'object' }));
        });
        // #14
        it('String #include, #notInclude', function () {
            assert.include('Arrow', 'row');
            assert.notInclude('dart', 'queue');
        });
        // #15
        it('#match, #notMatch', function () {
            const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
            assert.match(formatPeople('John Doe', 35), regex);
            assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
        });
    });

    // -----------------------------------------------------------------------------

    const Car = function () {
        this.model = 'sedan';
        this.engines = 1;
        this.wheels = 4;
    };

    const Plane = function () {
        this.model = '737';
        this.engines = ['left', 'right'];
        this.wheels = 6;
        this.wings = 2;
    };

    const myCar = new Car();
    const airlinePlane = new Plane();

    describe('Objects', function () {
        // #16
        it('#property, #notProperty', function () {
            assert.notProperty(myCar, 'wings');
            assert.property(airlinePlane, 'engines');
            assert.property(myCar, 'wheels');
        });
        // #17
        it('#typeOf, #notTypeOf', function () {
            assert.typeOf(myCar, 'object');
            assert.typeOf(myCar.model, 'string');
            assert.typeOf(airlinePlane.wings, 'number');
            assert.typeOf(airlinePlane.engines, 'array');
            assert.typeOf(myCar.wheels, 'number');
        });
        // #18
        it('#instanceOf, #notInstanceOf', function () {
            assert.notInstanceOf(myCar, Plane);
            assert.instanceOf(airlinePlane, Plane);
            assert.instanceOf(airlinePlane, Object);
            assert.notInstanceOf(myCar.wheels, String);
        });
    });

    // -----------------------------------------------------------------------------
});

