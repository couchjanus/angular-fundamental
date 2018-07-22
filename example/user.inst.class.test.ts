// Конструкторы выполняют начальную инициализацию объекта.
// Например, добавим в класс User конструктор:

class User {
    id: number;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return 'id: ' + this.id + ' name: ' + this.name;
    }
}

let tom: User = new User(1, 'Tom Cat');
console.log(tom.getInfo());
tom.id = 4;

let alice: User = new User(2, 'Alice Kitti');
console.log(alice.getInfo());
