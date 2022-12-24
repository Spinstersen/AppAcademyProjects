const Person = require('./person');

class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName,lastName),
    this.subject = subject,
    this.yearsOfExperience = yearsOfExperience
  }
  static combinedYearsOfExperience(array){
    let totalYears = 0;
    array.forEach(teacher => totalYears = teacher.yearsOfExperience + totalYears);
    return totalYears;
  }
}

/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
