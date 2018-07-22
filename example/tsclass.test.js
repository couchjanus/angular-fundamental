// Такая возможность позволяет избежать ошибок еще на этапе компиляции, что не может не радовать.
var CountClass = /** @class */ (function () {
    function CountClass() {
        this._count = 0;
    }
    CountClass.prototype.countUp = function () {
        this._count++;
    };
    CountClass.prototype.getCount = function () {
        return this._count;
    };
    return CountClass;
}());
var countInstance = new CountClass();
countInstance.countUp();
console.log('countUp : ' + countInstance.getCount());
countInstance.countUp();
console.log('countUp : ' + countInstance.getCount());
// Тут _count имеет модификатор private, что не позволит изменить его за пределами класса на прямую. Запустив этот код мы получим ошибку:
// countInstance._count = 17;
console.log('countUp : ' + countInstance.getCount());
