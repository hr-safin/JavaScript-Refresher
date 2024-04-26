//1 

// for(let i =1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
    
// }

// 2 

// for(let i =1; i<=30; i++){
//     if(i% 3 ===0  && i%5 === 0){
//         console.log(i)
//     }
// }

//3 give me the sum of the number of array that give me divisible by 3

const myArr = [12,34,44,55,65,56,68,72,48]
let sum = 0


for(let i=0; i<myArr.length; i++){
    if(myArr[i] % 3 === 0){
        sum = sum + myArr[i]
    }
   
   
}
console.log("The Total =",sum)

