// Arrow function

const userName = (user) => {
    console.log(`Hello my name is ${user}`)
}

userName("Hasibur Rahman Safin")


// Destructuring for array and object

const person = {
    name1 : "Hasibur Rahman Safin",
    school : "New Jersey Institute of Technology",
}

const {name1, school} = person

console.log(name1)
console.log(school)

const arr = ["one", "two", "three"]

const [first, second, third] = arr

console.log(first, second, third)


// filter method

const arrayOfNumber = [1,2,3,4,5,6,7]

const evenNumber = arrayOfNumber.filter(num => num % 2 === 0)

console.log(evenNumber)


// forEach method

const fruits = ["apple", "Banana", "mango"]

fruits.forEach(fruit => console.log(fruit))

for(let fruit of fruits){
    console.log(fruit)
}

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}

// find method

const numbers = [1, 2, 3, 4,5,6]

const  numb = numbers.find( num =>  num % 2 === 0)

console.log(numb)

// map

const numbers2 = [1,2,3,4,5,6]

const newArray = numbers2.map(num =>  num *2)

console.log(newArray)