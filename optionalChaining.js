const user = {
    name : "Hasibur rahman safin",
    id : 22323,
    study : "CSE",
    dream : "To Become a software developer",
    education : {
       degree : "Undergraduate",
        // school : {
        //     name : "Sabuj Kanan High School"
        // }
    }
}


console.log(user?.education?.school?.name)