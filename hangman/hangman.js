class Hangman {
    constructor(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
    }
    checkingStatus() {
   
        const finish = this.word.every ((letter) =>{
            return this.guessedLetters.includes(letter) || letter === ' '
        })
       
           if (this.remainingGuesses === 0 ) {
               this.status = "failed"
           }
           else if(finish){
               this.status = "finish"
           }
           else {
               this.status = "playing"
           }
       }


       get Puzzle() {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }


    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
    
        if (this.status !=="playing") {
            return
        }
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
      this.checkingStatus()
    }
}
