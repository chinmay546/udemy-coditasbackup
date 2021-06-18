const getData = (num , callback) => {
setTimeout (() => {
    if (typeof num === 'number')
    {
        callback(undefined , num*2)
    }
    else {
        callback('Number must be called')
    }
 
} , 2000)
}

getData(2 ,(err ,data)=>{
    if(err){
        console.log("Error")
    }
    else {
        getData(data , (err , data)=>{
            if (err) {
                console.log("Error")
            }
            else {
                console.log(data)
            }
        })
    }
})
const getDataPromise = (data) => {
   return  new Promise((resolve , reject)=> {
        setTimeout(() => {
            resolve(`this is the promise data : ${data}`)
            // reject("bad")
            // reject("bad")
        }, 2000);
    })
}

const mypro = getDataPromise(123)
mypro.then((data)=>{
console.log(data)
}  , (err) =>{
    console.log(err)
})