let count = 0 


function sum(){
    let count = 0
    
    return () => {
        console.log("hello")
    }
    
}


let result = sum()

console.log(result)
console.dir(result)
result()
result()
result()