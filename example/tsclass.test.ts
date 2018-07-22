// Такая возможность позволяет избежать ошибок еще на этапе компиляции

class CountClass {
    private _count: number;
    constructor() {
        this._count = 0;
    }
    countUp() {
    this._count ++;
    }
    getCount() {
    return this._count;
    }
}
var countInstance = new CountClass();

countInstance.countUp();
console.log('countUp : ' + countInstance.getCount());
countInstance.countUp();
console.log('countUp : ' + countInstance.getCount());
countInstance.countUp();

// _count имеет модификатор private, что не позволит изменить его за пределами класса на прямую. 
// Запустив этот код мы получим ошибку:
// countInstance._count = 17;
console.log('countUp : ' + countInstance.getCount());

  