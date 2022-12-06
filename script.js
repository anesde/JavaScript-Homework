console.log("Connected")

let constPrice = 119.95;
let userInput = 30;
let taxRate = 5;

let priceOfAll = constPrice * userInput;
console.log(priceOfAll);

let sumWithTax = constPrice * (1+(taxRate/100));
console.log(sumWithTax);

let priceTotal = sumWithTax * userInput;
console.log(priceTotal);






