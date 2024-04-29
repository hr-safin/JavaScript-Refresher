// function with expression

const printMe = function(){
    console.log("Print the printMe function")
}

printMe()

const printMeAgainWithParameter = function(name1,name2){
    console.log(name1 + " weds " + name2)
}

printMeAgainWithParameter("Safin", "Mahi")

const multipleFunction = function (){
    return "Safin"
}

const newFunction = function(name2){
    return multipleFunction() + " weds " + name2
}

console.log(newFunction("Mahi"))