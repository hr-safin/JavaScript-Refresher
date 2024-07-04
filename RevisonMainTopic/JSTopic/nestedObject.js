const info = {
    name : "Hasibur Rahman Safin",
    dream : "Go to United States",
    designation : "Software engineer",
    university : {
        first : "New Jersey Institute Of Technology",
        second : "Western New England University",
        third : "Northern Arizona University",
        subject : {
            choice1 : "Computer Science and Information Sciences",
            choice2 : "Computer Engineering",
            choice3 : "Cyber Security",
            choice4 : "Data Science"
        }
    }
}


console.log(info)
console.log(info.designation)
console.log(info.university.first)
console.log(info.university.subject.choice1)
console.log(info.university.subject.choice4)

delete info.name

console.log(info)