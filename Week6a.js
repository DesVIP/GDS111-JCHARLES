const PlayerArr = ["Mario", "Luigi", "Peach"];
const pwdArr = ["diamond", "emerald", "gold"];

let playerID = prompt("Enter player ID: ");
let password = prompt("Type password: ");

let validUser = false;
for(let i=0; i < PlayerArr.length; i++){
    if (playerID == PlayerArr[i] &&
        password == pwdArr[i]) {
            validUser = true; 
        }
}

if (validUser == true) {
    console.log("Welcome to the game!");
} else {
    console.log("Go away hacker ...");
}