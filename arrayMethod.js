// array method
let language = ["Python", "C++", "Go", "C#", "Javascript" ]

// find method

let data = language.find(lan => lan === "Javascript") 

let data1 = language.findIndex(lan => lan === "Javascript")

// filter method

let data2 = language.filter(lan => lan === "Javascript" || lan === "Python")


// let language = ["Python", "C++", "Go", "C#", "Javascript" ]

// slice method

let data3 = language.slice(1,3)

console.log(data3)
