// first.ts

let test:string = 'this is a string';
test = 1;

// [ts] Тип "(a: any, b: any) => any" не может быть назначен для типа "string".
// let test: string
test = function(a, b) {
    return a + b;
    };


function greeter(person) {
    return 'Hello, ' + person;
}

// Compile it using tsc first.ts.
// This will generate a first.js file in the same location.

let user = 'tsDevUser';

console.log(greeter(user));

let num: number; // Defines a number variable
let str: String = 'tsDevUser'; // Defines a string variable and initialises to tsDevUser

//
console.log(num, str);
