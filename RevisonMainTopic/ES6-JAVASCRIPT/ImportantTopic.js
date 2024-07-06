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