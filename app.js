const fs = require('fs');

const genders=['M', 'F'];

const maleNames=['Mike', 'Ken'];

const femaleNames=['Anne', 'Kate'];

const lastNames=['Jordan', 'Robertson'];

function randChoice(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

const people = [];

for(i=0; i<20; i++){
    
    var person = {};

    person.gender = randChoice(genders);

    if(person.gender == 'M') {
       person.firstName = randChoice(maleNames); 
    } else {
        person.firstName = randChoice(femaleNames);
    }
    
    person.lastName = randChoice(lastNames)
    person.age = Math.floor(Math.random() * (18 - 1)) + 1;

    people.push(person);
}

var peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
  });