// function myId(id:number|string){
//     console.log(`ID: ${id}`);
// }
// myId(1);
// myId("200");
// export {}
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
