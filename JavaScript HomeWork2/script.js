let yearInput = prompt("Enter a year");
console.log(yearInput);
let parsedInput = parseInt(yearInput);
console.log(typeof yearInput);

if(!Number.isNaN(parsedInput)){
    if((yearInput - 4) %12 === 0){
        console.log("Rat")
    } else if((yearInput - 4) %12 === 1){
        console.log("Ox");
    } else if((yearInput - 4) %12 === 2){
        console.log("Tiger");
    } else if((yearInput - 4) %12 === 3){
        console.log("Rabbit");
    } else if((yearInput - 4) %12 === 4){
        console.log("Dragon");
    } else if((yearInput - 4) %12 === 5){
        console.log("Snake");
    } else if((yearInput - 4) %12 === 6){
        console.log("Horse");
    } else if((yearInput - 4) %12 === 7){
        console.log("Goat");
    } else if((yearInput - 4) %12 === 8){
        console.log("Monkey");
    } else if((yearInput - 4) %12 === 9){
        console.log("Rooster");
    } else if((yearInput - 4) %12 === 10){
        console.log("Dog");
    } else if((yearInput - 4) %12 === 11){
        console.log("Pig");
    }
} else {
    console.log("Not valid input");
}

