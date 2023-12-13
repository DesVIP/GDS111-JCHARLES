//functions
function Spin() {
    credits -= bets
    var results = []
    const values = [100, 75, 50 ,25]
    for(let i =0; i < 4; i++){
        results[i] = Math.floor(Math.random() * 4)
    }
    
    console.log(String(results))

    for(let i = 0; i < results.length; i++){
        credits += values[results[i]]
        winnerpaid += values[results[i]]
    }
    console.log("Winner paid = " + winnerpaid);
    console.log("Bets = " + bets);
    console.log("Credits = " + credits);
}
//========================

var credits = 1000;
var bets = 150;
var winnerpaid = 0;

do {
console.log("<<<MENU>>>")
console.log("<1> Spin")
console.log("<2> Quit")

var Choice = prompt("Select: " )

var cont = "y"

if (Choice == 1) {
    Spin();
} else if (Choice == 2)
{
    cont = "n"
} else {
    console.log("Invalid input")
}
console.log("")


} while (cont == "y" && credits > 0);
