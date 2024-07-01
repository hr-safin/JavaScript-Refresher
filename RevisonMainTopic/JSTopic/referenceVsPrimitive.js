// Reference Vs Primitive


// Primitive value
let x = 6
let y = 5

x = y

y = 7



// Reference 

let obj1 = {
    name : "Hasibur rahman safin",
    school : "New jersey Institute of technology"
}

let obj2 =  obj1  // obj2 is a reference of object1 but not the actual value
obj2.name = "Rahman safin" // changing obj2 will affect the obj1

console.log(obj1.name)
console.log(obj2.name)