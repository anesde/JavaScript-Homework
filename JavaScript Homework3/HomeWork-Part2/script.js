//console.log("Connected");

function getUserInput() {
    let dogAge = 7;
    let userInput = prompt("Enter a number for the first function");
    let result = userInput * dogAge;
    console.log("The age of your dog is: " + result); 
}


function getUserInput2() {
    let humanYears = prompt("Enter a number for the second function for human years")
    let dogYears = 7;
    let result = humanYears / dogYears;
    result = parseInt(result);
    if(result >= 60) {
        alert("You are old :')");
    }
    console.log("The age of the human is: " + result);
}

getUserInput();
getUserInput2();