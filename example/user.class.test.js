// Класс User представляет пользователя и имеет два свойства id и name и одну функцию getInfo(). И теперь мы можем создать объекты данного класса:
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getInfo = function () {
        return 'id: ' + this.id + ' name: ' + this.name;
    };
    return User;
}());
// constructor(userId: number, userName: string) {
//      this.id = userId;
//     this.name = userName;
// }
var tom = new User();
tom.id = 1;
tom.name = 'Tom Cat';
console.log(tom.getInfo());
var alice = new User();
alice.id = 2;
alice.name = 'Alice Kitti';
console.log(alice.getInfo());
