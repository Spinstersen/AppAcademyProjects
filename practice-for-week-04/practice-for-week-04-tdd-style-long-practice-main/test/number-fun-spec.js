const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

const numberFun = require("../problems/number-fun");

describe("returnsThree())", () => {
    it("should return number '3'", () => {
      const three = numberFun.returnsThree();
      expect(three).to.equal(3);  
    });
  });
  describe("reciprocal(num))", () => {
    it("should return the reciprocal of a number", () => {
        const num1 = 10;
        const num2 = 1000;
        
        expect(numberFun.reciprocal(num1)).to.equal(0.1);
        expect(numberFun.reciprocal(num2)).to.equal(0.001);
        
    });
  });

  describe("reciprocal(num))", () => { 
    context("checking if numbers in range", () => {
    it("should throw an error if the number is smaller than 1 and greater 1.000.000", () => {
        const num1 = 1000000000;
        const num2 = -32323;
        
        assert.throws(() => { numberFun.reciprocal(num1)}, TypeError);
        assert.throws(() => { numberFun.reciprocal(num2)}, TypeError);
    });
    it("should work if numbers are between 1 and 1.000.000", () => {
      const num1 = 100000;
      const num2 = 33;
      
      expect(numberFun.reciprocal(num1)).to.equal(1/100000);
      expect(numberFun.reciprocal(num2)).to.equal(1/33);
  });
  });
});
  
  
