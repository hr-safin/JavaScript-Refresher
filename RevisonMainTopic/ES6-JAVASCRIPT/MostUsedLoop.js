
const nam = ["Safin","hasibur","Rahman","NJIT"]

for(let word of nam){
    console.log(word)
}

const fullName = "Hasibur Rahman Safin"
console.log(fullName)


const myInfo = {
    name : "Hasibur Rahman Safin",
    school : "New Jersey Institute Of Technology",
    subject : "Computer Science and Information Science",
    research: "Machine Learning"
}

for(let value in myInfo){
    console.log(value + " : " + myInfo[value])
}