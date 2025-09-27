//* Part I
function multiply(a: number,b: number):number{
    return a * b;
    // return "hello" //* Error: Type 'string' is not assignable to type 'number'.
}
let c = multiply(2,3);
console.log(c);

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
signUpUser("frostFern","frostfern@xyz.com",true)

//* Part II

function getValue(myVal:number):string | boolean{
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

const cars = ["Ford","Toyota","Honda"];
cars.map((cars):string =>{
    return `This is a ${cars}`;
})

function consoleError(errMsg:string):void{
    console.log(errMsg);
}
function handleError(errMsg:string):never{
    throw new Error(errMsg);
}

export {};