const price = 50000


if(price >= 35000){
   
    // 5% percent discount
    let discount = price * 5 / 100
    let due = price - discount 
    console.log(" You need to pay : ",due)
}

else if( price >= 45000){
    
    // 20% discount
    let discount = price * 20 / 100
    let due = price - discount
    console.log("You need to pay : ", due)
}

else{
    console.log("You do not get the discount, you have to pay the original price")
}