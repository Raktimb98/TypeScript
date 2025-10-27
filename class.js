"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User("Alice", 30, "Los Angeles");
// user1.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.
console.log(user1.name);
