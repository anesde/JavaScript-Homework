console.log("Connected");

function convert(num1) {
    let userInput = num1;
    let seconds = userInput * 60;
    seconds = parseInt(seconds);
    console.log(seconds);
}

convert(10);