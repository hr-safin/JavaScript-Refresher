// Lower case

let str = "my name is hasibur rahman safin"
let str2 = "My NAME IS HASIBUR RAHMAN SAFIN"

console.log(str.toUpperCase())
console.log(str2.toLocaleLowerCase())

const subject = "Computer science"
const course = "Computer Science"

if(subject.toLowerCase() === course.toLowerCase()){
    console.log("I will be studying at NJIT Insha Allah")
}

else{
    console.log("I will be studying at NJIT NJIT NJIT Insha Allah")
}


const goal = " Usa"
const dream = "Usa "

if(goal.trim() === dream.trim()){
    console.log("You are going to usa to pursue your bachelor degree")
}

else{
    console.log("You will be going to usa soon be confident")
}