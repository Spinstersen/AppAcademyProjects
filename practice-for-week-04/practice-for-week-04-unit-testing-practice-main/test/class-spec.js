const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word1 = new Word("whatever");
      expect(word1).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      let word2 = new Word("whatever");
      expect(word2.word).to.equal("whatever");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word3 = new Word("I'm tired of coming up with words that have vowels");
      expect(word3.removeVowels()).to.equal("'m trd f cmng p wth wrds tht hv vwls");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word4 = new Word("I'm tired of coming up with words that have consonants");
      expect(word4.removeConsonants()).to.equal("Iieooiuioaaeooa");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word4 = new Word("The pigs that speak latin are rare species");
      expect(word4.pigLatin()).to.equal("e pigs that speak latin are rare speciesThay");
    });
  });
});
