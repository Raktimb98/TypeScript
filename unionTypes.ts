// function myId(id:number|string){
//     console.log(`ID: ${id}`);
// }
// myId(1);
// myId("200");

type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let FrostFern: User | Admin = {
    name: "Frost",
    id: 123
}
FrostFern = {
    username: "Ff",
    id: 456
}

//Another Example

function getId(id: number | string) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id;
}
console.log(`Db ID: ${getId(123)}`);

// Array of union types
const data: (number | string)[] = [1, 2, 3, "4", "5"];
data.push(6);
data.push("7");
console.log(data);

// Another type of union types
let car: "PUNCH" | "ESCALADE" | "LAND CRUISER";
// car = "DEFENDER"; // It will show error because it is not in the union types.


export {}