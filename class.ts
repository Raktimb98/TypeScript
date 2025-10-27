class User {
    constructor(public name: string, public age: number, public readonly city: string) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("Alice", 30, "Los Angeles");
// user1.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.
console.log(user1.name);

export { };
