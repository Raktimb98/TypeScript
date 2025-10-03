const user = {
    name: "Frost Fernandez",
    age: 20,
    email: "frostfern@xyz.dev",
    isActive: true
}

function createUser({ name, isActive }: { name: string; isActive: boolean }) { }
let newUser = { name: "Frost", isActive: true, email: "frostfern@xyz.dev" }
// Extra properties are allowed when I pass an object variable
createUser(newUser)

function createCourse({ name, price }: { name: string, price: number }) { }
createCourse({ name: "Next.js", price: 100 })

function asdf(): { name: string, price: number } {
    return { name: "asdf", price: 123 }
}

export { }