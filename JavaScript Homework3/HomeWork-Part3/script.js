//console.log("Connected");


function getUserInput() {
    let userInput = prompt("How much money do you want to withdraw:")
    if(userInput > 1000000000) {
        console.log("Not enoguh money")
    } else if(userInput <= 1000000000) {
        console.log("You have withdrawn: " + userInput);
        let moneyLeft = 1000000000 - userInput;
        console.log("You have " + moneyLeft + " dollars left on your account");
    }
}

getUserInput();