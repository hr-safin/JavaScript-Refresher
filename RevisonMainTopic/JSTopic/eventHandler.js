//Event Handler

const button =  document.getElementById("NJIT")


button.addEventListener("click", () => {
    console.log("I want to study at njit")
})

const elements = document.getElementsByClassName("example")


for(let i=0; i < elements.length; i++){
        console.log(elements[i].textContent)
}


for(let i =0; i< elements.length; i++){
    elements[i].style.color = "blue"
}