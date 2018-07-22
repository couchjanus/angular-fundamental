// function.type.ts

function add(a, b) {
    return a + b;
}
// использование функции

let result1 = add(1, 2); // результат 3
let result2 = add('1', '2'); // результат 12

// Типичное определение функции в TypeScript:
function addy(a: number, b: number): number {
    return a + b;
}
// вызов функции
let result3 = addy(1, 2);
console.log(result3);

// Либо мы можем определить функцию как переменную и затем через переменной вызывать данную функцию:

let adds = function (a: number, b: number): number {
    return a + b;
};

let result4 = adds(1, 2);


// Функция может иметь параметры, которые указываются после названия функции в скобках через запятую. Через двоеточие после имени параметра указывается его тип:
// определение функции
function added(a: number, b: number) {
    let result5 = a + b;
    console.log(result5);
}
// вызов функции
added(20, 30); // 50
added(10, 15); // 25


// поскольку параметры имеют тип number, то вызов функции add("1", "2");
// не будет работать, и приложение не скомпилируется, так как параметры должны иметь тип number, а не тип string. При этом функция может не только использовать передаваемые параметры, но и глобальные переменные. определенные во вне:

let koef: number = 1.5;

function aDd(a: number) {
    let result6 = a *koef;
    console.log(result6);
}
 aDd(20); // 30

function addFor(a: number, b: number): number {
    return a + b;
}
let resultAdd = addFor(1, 2); // В данном случае функция будет возвращать значение типа number.


// Если функция ничего не возвращает, то указывается тип void:

function add2(a: number, b: number): void {
    console.log(a + b);
}
add2(10, 20);

// Можно не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения:

function addv(a: number, b: number) {
    return a + b;
}
let resultv = addv(10, 20);
