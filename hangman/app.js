
//http request
const game1 = new Hangman('abc abc', 3)
const wordText = document.querySelector("h1")
const guessRemain = document.querySelector("h3")
wordText.textContent = game1.Puzzle
guessRemain.textContent = `Guess Remaining  ${game1.remainingGuesses}`

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    wordText.textContent = game1.Puzzle
    if (game1.status === "playing"){
        guessRemain.textContent = `Guess Remaining  ${game1.remainingGuesses}`
    }
    else if (game1.status === "failed"){
        guessRemain.textContent = `Nice Try ! The Word was "${game1.word.join("")}"`
    } 
    else {
        guessRemain.textContent = `Great Work! You Gussed the word "${game1.word.join("")}"`
    }

})
getPuzzle(4).then((puzzle)=>{
console.log(puzzle)
} , ()=>{
    console.log('Error')
})

// making a http request 

const countryCode = "IND"
getCountryInfo(countryCode).then((country)=> {
    console.log(country.name)
}, (err)=>{
    console.log(err)
})
    