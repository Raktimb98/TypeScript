"use strict";
// function myId(id:number|string){
//     console.log(`ID: ${id}`);
// }
// myId(1);
// myId("200");
Object.defineProperty(exports, "__esModule", { value: true });
var FrostFern = {
    name: "Frost",
    id: 123
};
FrostFern = {
    username: "Ff",
    id: 456
};
//Another Example
function getId(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id;
}
console.log("Db ID: ".concat(getId(123)));
