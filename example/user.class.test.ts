// Класс User представляет пользователя и имеет два свойства id и name и одну функцию getInfo(). И теперь мы можем создать объекты данного класса:

class User {
    id: number;
    name: string;
    getInfo(): string {
        return 'id: ' + this.id + ' name: ' + this.name;
    }
}
    // constructor(userId: number, userName: string) {
    //      this.id = userId;
    //     this.name = userName;
    // }

let tom: User = new User();
tom.id = 1;
tom.name = 'Tom Cat';
console.log(tom.getInfo());
let alice: User = new User();
alice.id = 2;
alice.name = 'Alice Kitti';
console.log(alice.getInfo());
