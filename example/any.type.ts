// any.type.ts

// Проверка типа будет произведена во время компиляции.
let someVar: any = 'hello';
console.log(someVar);   // сейчас someVar - это string

someVar = 20;
console.log(someVar);   // сейчас someVar - это number

// Так как здесь применяется тип any, то данный код скомпилируется без ошибок, несмотря на смену строкового значения на числовое.


var someArray: any[] = [ 24, 'Tom', false];
someArray[1] = 100;

let randomArray: any[] = ['a', 1, true];
