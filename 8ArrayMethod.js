//array methods
const array1 = [1,2,3,4,5,6]
const array2 = ["apple", "banana", "orange", "watermelon"]

// console.log(typeof array2.toString(array2))

// let myNumber = array1.at(5)
// console.log(myNumber)

// let multiplication = array1.join(" * ")

// console.log(multiplication," = ", 720)

// array1.push("mahi")
// array1.push(100)
// array1.pop()


const fruits = ["apple", "banana", "watermelon", "mango"]

fruits.push("orange", "lichi")
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.unshift(1,2,3)
console.log(fruits)

fruits.shift()
console.log(fruits)

const allNumberAndFruits = array1.concat(fruits, "jackfruits")

console.log(allNumberAndFruits)

const animals = ["cat", "dog", "rabbit", "bird"];

animals.splice(1,2,"cow", "tiger")

console.log(animals)

