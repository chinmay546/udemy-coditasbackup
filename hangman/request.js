

const getPuzzle = (count) => new Promise((resolve , reject) => {
    const req = new XMLHttpRequest()
    req.addEventListener('readystatechange' , (e)=>{
    if (e.target.readyState === 4  && e.target.status === 200 ){
    const data = JSON.parse(e.target.responseText)
   resolve(data.puzzle)
    }
    else if (e.target.readyState=== 4) {
        reject("An Error")
    }
    })
  
    url = `http://puzzle.mead.io/puzzle?wordCount=${count}`
    req.open("GET",url)
    req.send()
})


const getCountryInfo = (countryCode) => new Promise ((resolve , reject)=> {
    const reqCountry = new XMLHttpRequest()
    reqCountry.addEventListener('readystatechange' , (e)=>{
    if (e.target.readyState === 4  && e.target.status === 200 ){
        const data = JSON.parse(e.target.responseText)
        const country = data.find( (ele) => ele.alpha3Code === countryCode)
        resolve(country)
    }
    else if (e.target.readyState=== 4) {
        reject("Error")
    }
    })
    reqCountry.open("GET","https://restcountries.eu/rest/v2/all")
    reqCountry.send()
})
