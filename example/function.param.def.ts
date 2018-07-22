// Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные. Необязательные параметры должны быть помечены вопросительным знаком ?. Причем необязательные параметры должны идти после обязательных:

function getName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else{
        return firstName;
    }
}

// когда в функцию передается только firstName, второй используемый параметр будет иметь неопределенное значение или "undefined". Поэтому с помощью условной конструкции проверяется наличие значения для этого параметра.


// Особым типом необязательных параметров являются параметры по умолчанию. Если для данных параметров не передано значение, то они используют некоторое значение по умолчанию:

function getFullName(firstName: string, lastName: string = 'lastName') {
    return firstName + ' ' + lastName;
}


// Если необходимо, чтобы функция принимала набор однотипных параметров, то используется знак многоточия, после которого идет массив:

function addNumbers(firstNumber: number, ...numberArray: number[]): number {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}


let operation: (x: number, y: number) => number;

// установка функции:
operation = function(x: number, y: number): number {
    return x + y;
};
console.log(operation(10, 20)); // 30
operation = function (x: number, y: number): number {
    return x * y;
};
console.log(operation(10, 20)); // 200

// Для определения функций в TypeScript можно использовать лямбда-выражения. Лямбда-выражения представляют выражения типа (параметры) => тело функции:

let sum = (x: number, y: number) => x + y;

let result = sum(15, 35); // 50

console.log(result);

let sum = (x: number, y: number) => {
    x *= 2;
    return x + y;
};
let result = sum(15, 35); // 65
console.log(result);

// Лямбда-выражения можно передавать в функцию вместо параметра, который представляет собой функцию:
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{

    let result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, (x,y)=>x+y)); // 30 
console.log(mathOp(10, 20, (x, y) => x * y)); // 200 
