// void.type.ts

function warnUser(): void {
    alert('This is my warning message');
}

// Объявление переменных с типом void бесполезно, потому что вы можете присвоить им только значения undefined или null:
let unusable: void = undefined;
