const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
            console.log("Async task is complete")
            resolve()
    },1000)
})

promiseOne.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2')
        resolve()

    },1000)
}).then(() => {
    console.log("Promise 2 is consumed")
})


new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({name : "Hasibur Rahman Safin", school : "NJIT", email : "safin@gmail.com"})
    },1000)
}).then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({userName : "Hasibur Rahman Safin", password : "12121"})
        }else{
            reject("Error : something wrong")
        }
    },1000)
})

const user = promiseFour.then((user) => {
    console.log(user)
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({userName : "Rahman", password})
        }
        else{
            reject("Error: Something is wrong")
        }
    })
})
