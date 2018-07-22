// alias.type.ts
// TypeScript позволяет определять псевдонимы типов с помощью ключевого слова type:

type stringOrNumberType = number | string;

let sumy: stringOrNumberType = 36.6;

if (typeof sumy === 'number') {
    console.log(sum / 6);
}
// Далее мы сможем применять псевдоним аналогично типу данных.
