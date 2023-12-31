// array method
let language = ["Python", "C++", "Go", "C#", "Javascript", "Javascript" ]

// find method

let data = language.find(lan => lan === "Javascript") 

let data1 = language.findIndex(lan => lan === "Javascript")

// filter method

let data2 = language.filter(lan => lan === "Javascript" || lan === "Python")


// let language = ["Python", "C++", "Go", "C#", "Javascript" ]

// slice method

let data3 = language.slice(1,3)


// splice method

// let data4 = language.splice(1,2, "Ruby", "React JS", "Next JS")
// console.log(data4)
// console.log(language)


// concat method don't change the original array and return new new array

// let data5 = language.concat("lang1", "lang2")

// push method change the original  array

// let data6 =  language.push("lang3")


// map method
// let language = ["Python", "C++", "Go", "C#", "Javascript", "Javascript" ]
let newLanguage = []
for(let i =0; i<language.length; i++){
    if(language[i] === "Javascript"){
        newLanguage.push("Javascript")
    }else{
        newLanguage.push("N/A")
    }
}

// console.log(newLanguage)
// console.log(language)

let result = language.map(item => {
    if(item === "Javascript"){
        return "Javascript"
    }else{
        return "N/A"
    }
})

// console.log(result)
// console.log(language)

let result2 = language.map(item => `${item}:`)

// console.log(result2)



// reduce method

const number1 = [1,2,3,4,5,6,7,8,9,10]

const sumOfArray = number1.reduce(((total,currentValue) => total + currentValue),0)

// console.log(sumOfArray)


const number2 = [12,23,343,4,5]  // iterable
const name1 = "Safin"  // iterable

// for(let num of number2){
//     console.log(num)
// }

// for(let c of name1){
//     console.log(c)
// }


const myInfo = {
    name : "Hasibur Rahman Safin",
    profession : "MERN stack developer",
    age : 23,
    goal : "To become a full stack developer",

}

// for(key in myInfo){
//     console.log(`${key} : ${myInfo[key]} `)
// }

