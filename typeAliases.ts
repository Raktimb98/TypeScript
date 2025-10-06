type User = {
    name: string;
    age: number;
    isActive: boolean;
}
function getUserInfo(user:User){

}
getUserInfo({name:"Alice", age:30, isActive:true});

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