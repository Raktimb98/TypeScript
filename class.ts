class User{
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("Alice", 30);
console.log(user1.name);

export {};
