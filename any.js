"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let data //! Don't use 'any' type
//Instead of using 'any', use specific type.
var data; //* Use this.
function getData() {
    return "asdf";
}
data = getData();
console.log(data);
