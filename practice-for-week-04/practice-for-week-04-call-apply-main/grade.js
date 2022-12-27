// Do not modify!
const GradeBook = require('./classes/gradebook.js');

const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

// You can modify the following lines
let grades1Average = gradesAvg.call(grades);
console.log(grades1Average);
let grades1WithBonus= gradesAvg.apply(grades,[20]);
console.log(grades1WithBonus);
