// reference types

let person = {
    name: 'Juan',
    age: 27
};

// Dot Notation
person.name = 'Jonathan';

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);