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


