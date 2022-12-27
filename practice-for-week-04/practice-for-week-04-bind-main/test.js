const Employee = require("./employee");


const john = new Employee('John Wick','Dog Lover');
global.setTimeout(john.sayName.bind(john),2000);

global.setTimeout(john.sayOccupation.bind(john),3000);
