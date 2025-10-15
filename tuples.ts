// const user: (string | number)[] = [1, "Alice", 2, "Bob", 3, "Charlie"];
let user: [string, number, boolean];
user = ["FrostFern", 20, true];
// user=[43,"FrostFern",false];//error for order

let rgb: [number, number, number] = [255, 0, 0]; // RGB for red


type User = [number, string];
let newUser: User = [1, "Alice"];

// let newUser[1] = 23; // Error: Type 'number' is not assignable to type 'string'
newUser[1] = "FrostFern";
// newUser.push(true); // Not allowed: Argument of type 'true' is not assignable to parameter of type 'string'.
console.log(newUser[0]); // Output: 1
console.log(newUser[1]); // Output: FrostFern

export { };