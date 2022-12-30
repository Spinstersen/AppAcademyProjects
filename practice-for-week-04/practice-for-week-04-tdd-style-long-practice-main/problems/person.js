class Person {
  constructor(name,age){
    this.name = name,
    this.age = age
  }
  sayHello(){
    return `Hello, I'm ${this.name}.`;
  }
  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}.`;
  }
  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }
  update(obj){
    if (! (obj instanceof Object)){
      throw new TypeError('the method update only takes an object as an argument.');
    }
    else if (obj instanceof Object){
      if ( !(Object.keys(obj).includes('name')) || !(Object.keys(obj).includes('age'))){
        throw new TypeError('the method update only accepts an object with name and age properties');
      }
      this.name = obj.name;
      this.age = obj.age;
    }
  }
  tryUpdate(obj){
    try{
    this.update(obj);
    } catch(error) {
      return false;
    } 
      return true;
    
  }

  static greetAll(arrOfObj){
    let newArr = []
    arrOfObj.forEach(el => {
      newArr.push(el.sayHello());
    })
    return newArr;
  }
}





module.exports = Person;
