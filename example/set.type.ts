// set.type.ts


let x: number = 10;
let hello: String = 'hello world';
let isValid: boolean = true;

let num: number; // Defines a number variable
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


let name1: string = 'bob';
name1 = 'smith';


let Name: String = `Gene`;
let age: number = 37;

let sentence: String = `Hello, my name is ${Name}. I'll be ${age + 1} years old next month.`;

// Эквивалент этого объявления sentence:
    
// let sentence: string = "Hello, my name is " + name + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month."

// При этом если в коде мы потом захотим изменить тип, 
//  например:

// hello = 23; 

// let x1: any
let x1;  // тип any
x1 = 10;

// console.log(num, hello);

// Наиболее базовым типом является логический ture/false, который в Javascript и Typescript называется boolean.

let isEnabled = true;
let isAlive: Boolean = false;

console.log(isEnabled);
console.log(isAlive);


let str: String = 'tsDevUser'; // Defines a string variable and initialises to tsDevUser
let array: String[] = ['a', 'b', 'c']; // Defines a string array variable
let random: any[] = ['a', 1, true];

