const isEqual = require('../isDivisible');

const expect = require('chai').expect;

describe('isDivisible', function() {
    it('should return fizzbuzz', function() {

        const divisibleInputs = [
            [15, 45, 90]
        ];

        divisibleInputs.forEach(function(input) {
            expect(isDivisible(input)).to.equal('fizz-buzz');
        });
    }
}

    it('should return buzz', function() {

        const divisibleInputs = [
            [5, 10, 15];
        ];

        divisibleInputs.forEach(function(input) {
            expect(isDivisible(input)).to.equal('buzz');
        });

    }

    it('should return fizz', function() {

        const divisibleInputs = [
            [3, 6, 9];
        ];

        divisibleInputs.forEach(function(input) {
            expect(isDivisible(input)).to.equal('fizz');
        });
        
    }

    it('should show an error for non numeric inputs', function() {

        const badInputs = [
            [cat, dog, goat];
        ];

        badInputs.forEach(function(input) {
            expect(function() {
                isDivisible(input);
            }).to.throw(Error);
        });
    });
    