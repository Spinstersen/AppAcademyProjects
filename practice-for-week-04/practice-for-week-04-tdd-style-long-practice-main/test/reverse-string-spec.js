const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert

const reverseString = require('../problems/reverse-string');

describe("reverseString(string))", () => {
    it("should return a reversed string", () => {
      const string1 = "fun";
  
      const reversed1 = reverseString(string1); // should reverse the string
      expect(reverseString(string1)).to.equal("nuf");  
      expect(reverseString(string1)).to.equal(reversed1);
    });
  });
  describe("reverseString(string))", () => {
    it("should throw an error in case you input something different than a string", () => {
      const nonString1 = 123456;
      assert.throws(() => { reverseString(nonString1)}, TypeError);
    });
  });
