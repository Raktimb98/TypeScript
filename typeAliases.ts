//* Simple way to understand type aliases
let a: string | number | undefined = "Hello";
let b: string | number | undefined = "Hello";
let c: string | number | undefined = "Hello";
let d: string | number | undefined = "Hello";
//rather than repeating the same union type multiple times, we can define a type alias.
type StringNumberUndefined = string | number | undefined;
let e: StringNumberUndefined = "Hello";
let f: StringNumberUndefined = "Hello";
let g: StringNumberUndefined = "Hello";
let h: StringNumberUndefined = "Hello";

//* Type alias with object types
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    upiDetails?:string; //optional property
}
let myUser: User = {
    _id: "1234",
    name: "John",
    email: "john@xyz.dev",
    isActive: true
}

console.log(myUser.name);

export { }