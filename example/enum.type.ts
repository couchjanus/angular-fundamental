// enum.type.ts

enum Season { Winter, Spring, Summer, Autumn }
let current: Season = Season.Summer;
console.log(current);
current = Season.Autumn; // изменение значения
console.log(current);

// все элементы перечисления представляют числовые значения. 
// По-умолчанию перечисления нумеруются с нуля. 
// enum Seasons { Winter=0, Spring=1, Summer=2, Autumn=3 }
// Хотя мы можем переопределить эти значения:
// enum Seasons { Winter=10, Spring=20, Summer=30, Autumn=40 }
// Также мы можем получить непосредственно текстовое значение:
// enum Seasons { Winter=0, Spring=1, Summer=2, Autumn=3 };
// let currentSeason: string = Seasons[2];    // 2 - числовое значение Summer
// console.log(currentSeason);   // Summer

