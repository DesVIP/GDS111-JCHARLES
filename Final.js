let numberGenerator = Math.floor(Math.random() * 100) + 1;
var userInput = 0;
let trialCount = 1;



function guessChecker() {
    
    if (userInput == numberGenerator) {
        console.log("Hooray! You guessed it in " + trialCount + " attempts")
    } else if (trialCount === 5) {
        console.log("Sorry, YOU LOSE!")
    }
    if(userInput < numberGenerator) {
        console.log("Your guess is lower - try again")
    } else if (userInput > numberGenerator) {
        console.log("Your guess is higher - try again")
    }

    trialCount++;

    userInput = prompt("Guess a number")
}









