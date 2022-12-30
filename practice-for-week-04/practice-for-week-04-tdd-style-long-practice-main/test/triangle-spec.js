const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const triangle = require("../problems/triangle");
const {Triangle, Scalene, Isosceles} = triangle


let tri1,tri2,scalene1,scalene2,isocele1,isocele2
let sides1,sides2,sides3

describe("Class Triangle ", ()=> {
    
    beforeEach(()=>{
        sides1 = 6;
        sides2 = 9;
        sides3 = 11;
        tri1 = new Triangle(sides1, sides2, sides3); 
        tri2 = new Triangle(sides3, sides2, sides1); 
        triangleInvalidEq = new Triangle(1, 2, 3); 
        triangleInvalidNEq = new Triangle(1, 2, 4); 
    })
    context("Checking the properties of the Triangle class and it's methods", ()=>{
        it('should have properties side1, side2, and side3', () => {
            expect(tri1).to.have.property("side1",sides1);
            expect(tri1).to.have.property("side2",sides2);
            expect(tri1).to.have.property("side3",sides3);
            expect(tri2).to.have.property("side1",sides3);
            expect(tri2).to.have.property("side2",sides2);
            expect(tri2).to.have.property("side3",sides1);
    });
        it('Checking if the getPerimeter() will return the perimeter',()=>{
            expect(tri1.getPerimeter()).to.eql(26);
        });
        it('hasValidSideLengths() returns true on valid sides', () => {
            expect(tri1.hasValidSideLengths()).to.be.true;
            expect(tri2.hasValidSideLengths()).to.be.true;
          });
          it('hasValidSideLengths() returns false on invalid sides', () => {
            expect(triangleInvalidEq.hasValidSideLengths()).to.be.false;
            expect(triangleInvalidNEq.hasValidSideLengths()).to.be.false;
          });  
          it('should not have isValid property before validate() called', () => {
            expect(tri1).to.not.have.property('isValid');    
          });
          it('should have isValid property after validate() call with true/false', () => {    
            tri1.validate()
            triangleInvalidEq.validate()
            triangleInvalidNEq.validate()
            expect(tri1).to.have.property('isValid', true);
            expect(triangleInvalidEq.isValid).to.be.false;
            expect(triangleInvalidNEq.isValid).to.be.false;                
          });
          it('getValidTriangles() static should return valid triangles from any number of args', () => {    
    
            tri1.validate()
            triangleInvalidEq.validate()
            triangleInvalidNEq.validate()
            expect(Triangle.getValidTriangles(tri1, triangleInvalidEq, triangleInvalidNEq, tri2)).to.eql([tri1, tri2]);                
          });  
                  
    });
} );

describe("Scalene class", () => {
    let validateSkaleneSpy
    beforeEach(() => {     
        side11 = 2;
        side12 = 3;
        side13 = 4;
        
        scalene1 = new Scalene(side11, side12, side13); 
        scalene2 = new Scalene(side13, side12, side11); 
        scaleneInvalidEq = new Scalene(2, 2, 3); 
        validateSkaleneSpy = chai.spy.on(Scalene, 'validate')
        scaleneInvalidTriangle = new Scalene(1, 2, 4);  
      
    });

    afterEach(() => {
      chai.spy.restore(Scalene);
    });
    
    it('should inherit from the Triangle class', () => {
        expect(new Scalene).to.be.an.instanceof(Triangle);    
      });
      it('should have properties side1, side2, and side3, isValidTriangle', () => {
        expect(scalene1).to.have.property('side1',side11);
        expect(scalene1).to.have.property('side2',side12);
        expect(scalene1).to.have.property('side3',side13);
        expect(scalene1).to.have.property('isValidTriangle',true);
      });
      
      it('Scalene.validate() should run once on creation', () => {    
        expect(validateSkaleneSpy).to.have.been.called.once.with.exactly(1, 2, 4);
      });  
    
      it('isScalene() should return true/false, isScalene', () => {
        expect(scalene1.isScalene()).to.be.true;
        expect(scalene2.isScalene()).to.be.true;
        expect(scaleneInvalidEq.isScalene()).to.be.false;
      });
    
      it('should not have isValidScalene property before validate() called', () => {
        expect(scalene1).to.not.have.property('isValidScalene');    
      });
      it('should have isValidScalene property true/false after validate()', () => {
        scalene1.validate()
        scalene2.validate()
        scaleneInvalidEq.validate()
        
        expect(scalene1).to.have.property('isValidScalene', true);    
        expect(scalene2).to.have.property('isValidScalene', true);    
        expect(scaleneInvalidEq).to.have.property('isValidScalene', false);    
      });
      it('should not usevalidate() method on the triangle class', () => {
        scalene1.isValid = null
        scalene1.validate()
        expect(scalene1.isValid).to.eql(null);    
      });
      
    });
    
    
    describe("Isosceles class", () => {
      let validateIsoscelesSpy
      beforeEach(() => {     
        side11 = 2;
        side12 = 2;
        side13 = 3;
        
        isosceles1 = new Isosceles(side11, side12, side13); 
        isosceles2 = new Isosceles(side13, side12, side11); 
        isoscelesInvalidEq = new Isosceles(2, 3, 4); 
        validateIsoscelesSpy = chai.spy.on(Isosceles, 'validate')
        scaleneInvalidTriangle = new Isosceles(1, 2, 4);     
        
      });
      afterEach(() => {
        chai.spy.restore(Isosceles);
      });
    
      it('should inherit from the Triangle class', () => {
        expect(new Isosceles).to.be.an.instanceof(Triangle);    
      });
    
      it('should have properties side1, side2, and side3, isValidTriangle', () => {
        expect(isosceles1).to.have.property('side1',side11);
        expect(isosceles1).to.have.property('side2',side12);
        expect(isosceles1).to.have.property('side3',side13);
        expect(isosceles1).to.have.property('isValidTriangle',true);
      });
      
      it('Isosceles.validate() should run once on creation', () => {    
        expect(validateIsoscelesSpy).to.have.been.called.once.with.exactly(1, 2, 4);
      });  
    
      it('isIsosceles() should return true/false, isIsosceles', () => {
        expect(isosceles1.isIsosceles()).to.be.true;
        expect(isosceles2.isIsosceles()).to.be.true;
        expect(isoscelesInvalidEq.isIsosceles()).to.be.false;
      });
    
      it('should not have isValidScalene property before validate() called', () => {
        expect(isosceles1).to.not.have.property('isValidIsosceles');    
      });
      
      it('should have isValidIsosceles property true/false after validate()', () => {
        isosceles1.validate()
        isosceles2.validate()
        isoscelesInvalidEq.validate()
        
        expect(isosceles1).to.have.property('isValidIsosceles', true);    
        expect(isosceles2).to.have.property('isValidIsosceles', true);    
        expect(isoscelesInvalidEq).to.have.property('isValidIsosceles', false);    
      });
    
      it('should not use validate() method on the triangle class', () => {
        isosceles1.isValid = null
        isosceles1.validate()
        expect(isosceles1.isValid).to.eql(null);    
      });  
    });
