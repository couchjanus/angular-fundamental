// tuple.type.ts

// определение кортежа
// кортеж состоит из двух элементов - строки и числа

let userInfo: [string, number];

// инициализация кортежа
userInfo = ['Tom', 28];

// Неправильная инициализация - переданные значения не соответствуют типам по позиции
// userInfo = [28, "Tom"]; // Ошибка

// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;
