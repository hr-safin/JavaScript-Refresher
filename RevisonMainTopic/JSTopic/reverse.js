const subject = "Computer Science and Information science"



let rev = ""
for(let i =0; i< subject.length; i++){

    const letter = subject[i]
    rev = letter  + rev
}

console.log(rev)

console.log("divider")


let reverse = ""
for(let letter of subject){
    reverse =   letter + reverse
}

console.log(reverse)


//shortcut
let reversed = subject.split("").reverse().join("")
console.log(reversed)

let reversed2 = subject.split("").reverse().join("")
console.log(reversed2)


