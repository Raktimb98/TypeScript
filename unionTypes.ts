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

export {}