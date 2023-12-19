// primitive type

let x =10  // initial value
let y = 11  // initial value

y = x   // change y value to x value
y = 12  // after that we reassign y to 12 but that does not affect x value 

console.log(x)
console.log(y)


//  reference type

let a = ["JS", "Python"]  // initially  reference value
let b = ["HTML", "CSS"]   // initially reference value

b = a  // reassigned b to a

a.push("GO")   // pushed value into a value

console.log(a)
console.log(b)  // reference type affect b because it is a reference 
                // if one reference is change other will be affected too

