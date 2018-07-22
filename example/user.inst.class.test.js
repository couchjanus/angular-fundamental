// Конструкторы выполняют начальную инициализацию объекта.
// Например, добавим в класс User конструктор:
var User = /** @class */ (function () {
    function User(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        return 'id: ' + this.id + ' name: ' + this.name;
    };
    return User;
}());
var tom = new User(1, 'Tom Cat');
console.log(tom.getInfo());
tom.id = 4;
var alice = new User(2, 'Alice Kitti');
console.log(alice.getInfo());
