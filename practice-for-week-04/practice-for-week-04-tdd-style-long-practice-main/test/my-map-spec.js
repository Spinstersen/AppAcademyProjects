const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap()", () => { 
    context("checking if the function myMap functions like Array.map", () => {
    it("should work on arrays and don't mutate it", () => {
        
        const arr = [1, 2, 3];
        const callback = (el) => el * 2;

        console.log(myMap(arr, callback)); // prints [2,4,6]
        console.log(arr); // prints [1,2,3]
        
        expect(myMap(arr,callback)).to.eql([2,4,6]);
        expect(arr).to.eql([1,2,3]);
    });
  });
});

describe("myMap()", () => { 
    context("checking if the function myMap functions like Array.map", () => {
        let arr// 
        let callback// = (el) => el * 2;
        let cb
        let spyOnMap, spyOnCallback 

    beforeEach(function() {
            arr = [1,2,3,4,5];
            callback = (el) => el * 2;
            spyOnMap = chai.spy.on(arr, "map"); 
            spyOnCallback = chai.spy(callback); 
            cb = myMap(arr, spyOnCallback);
    });

    it("should work on arrays and don't mutate it", () => {
        expect(cb).to.eql([2,4,6,8,10]);
    });
    it("should not mutate it", () => {
        expect(arr).to.eql([1,2,3,4,5]);
    });
    it("should not call the array.map function", () => {
        expect(spyOnMap).to.not.have.been.called;
    });
    it("should call the myMap function just once", () => {
        expect(spyOnCallback).to.have.been.called.exactly(arr.length);
    });
  });
});
