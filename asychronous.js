const getData = async () => {
   try{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await res.json()

    console.log(data)

   }catch(err){
    console.log(err)
   }
}

const processData =  () => {
    return getData() 
}

( async function(){
   const result = await processData()
   
})()

