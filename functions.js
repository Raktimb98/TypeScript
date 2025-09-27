"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Part I
function multiply(a, b) {
    return a * b;
    // return "hello" //* Error: Type 'string' is not assignable to type 'number'.
}
var c = multiply(2, 3);
console.log(c);
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("frostFern", "frostfern@xyz.com", true);
//* Part II
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var cars = ["Ford", "Toyota", "Honda"];
cars.map(function (cars) {
    return "This is a ".concat(cars);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
