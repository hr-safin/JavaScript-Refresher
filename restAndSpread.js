const fruits = ["Banana", "Orange"]






const data = [
    {
        name : "Hasibur Rahman Safin"
    },
    {
        name : "Wasiful Islam"
    },
    {
        name : "Sunny"
    }
]

const language = {
    first : "Python",
    second : "JavaScript",
    third : "C++"
}

const result = {
    ...language
}



const arr1 =[1,2,3,4,5]
const arr2 = [...arr1, 6,7,78]

const obj1 = {name : "Hasibur Rahman Safin", age : "43"}
const obj2 = {...obj1, dream : "Computer Engineer"}




function sum(a,b,c){
    return a + b + c
}


const myArray = [1,2,3]


const string1 = "Safin"

const array = [...string1]



function totalSum(text,...rest){
    const result = rest.reduce((total, init) => total + init, 0)
    console.log(`${text} ${result}`)
}

totalSum("The Total Sum is:",10,2,3)
