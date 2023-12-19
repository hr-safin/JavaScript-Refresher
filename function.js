// regular function
function regular(){
    console.log("Hello world")
    // function by default return undefine
}



// function expression

const hello = function(){
    console.log("Hello I am Safin")
}

// named function

const hello1 = function hello(){
    console.log("Hello I am a full stack developer")
}


// arrow function


const hello2 = () => ({
    a : " Hasibur Rahman Safin",
    b : "Mahi Rahman"
})


// anonymous function


function hello3(){
    return () => {
        console.log("Hello this is an anonymous function")
    }
}


const result = hello3()

result()


