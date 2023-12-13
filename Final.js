let numberGenerator = Math.floor(Math.random() * 100) + 1;
var userInput = 0;
let trialCount = 1;
var secretNum = 0;
var Continue = true;

while (Continue) {
  userInput = prompt("Guess a number");
  console.log(userInput);

  secretNum = numberGenerator;

  if (userInput < secretNum) {
    console.log("Your guess is lower - try again");
  } else if (userInput > secretNum) {
    console.log("Your guess is higher - try again");
  }
  if (userInput == secretNum) {
    console.log("Hooray! You guessed it in " + trialCount + " attempts");
    Continue = false;
  } else if (trialCount === 5) {
    console.log("Sorry, YOU LOSE!");
    console.log("The secret number was " + secretNum)
    Continue = false;
  }

  trialCount++;
}
