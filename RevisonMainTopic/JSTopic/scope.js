var lang = "React js"

function myLang(topic){
    var lang = topic
    console.log(`My favourite language is ${topic}`)
}

myLang("JavaScript")

console.log(`I know java script ${lang}`)


let a = true

// let is a block scope and var is function scope
if(a){
    let b = "five"
    console.log(b)
}

console.log(b)