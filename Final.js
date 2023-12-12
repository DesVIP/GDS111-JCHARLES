
let numberGenerator = Math.floor(Math.random() * 100) + 1;
var userInput = 0;
let trialCount = 1;
var secretNum = 0;

userInput = prompt("Guess a number")
console.log(userInput)

secretNum = numberGenerator

    if (userInput == secretNum) {
        console.log("Hooray! You guessed it in " + trialCount + " attempts")
    } else if (trialCount === 5) {
        console.log("Sorry, YOU LOSE!")
    }
    if(userInput > secretNum) {
        console.log("Your guess is lower - try again")
    
    } else if (userInput < secretNum) {
        console.log("Your guess is higher - try again")
       
    }
 
    trialCount++;
    
   
    

    

    










