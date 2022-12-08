let yearInput = prompt("Enter a year");
console.log(yearInput);
let parsedInput = parseInt(yearInput);
console.log(typeof yearInput);


if(!Number.isNaN(parsedInput)){
    if((yearInput - 4) %12 === 0){
        alert("Rat")
    } else if((yearInput - 4) %12 === 1){
        alert("Ox");
    } else if((yearInput - 4) %12 === 2){
        alert("Tiger");
    } else if((yearInput - 4) %12 === 3){
        alert("Rabbit");
    } else if((yearInput - 4) %12 === 4){
        alert("Dragon");
    } else if((yearInput - 4) %12 === 5){
        alert("Snake");
    } else if((yearInput - 4) %12 === 6){
        alert("Horse");
    } else if((yearInput - 4) %12 === 7){
        alert("Goat");
    } else if((yearInput - 4) %12 === 8){
        alert("Monkey");
    } else if((yearInput - 4) %12 === 9){
        alert("Rooster");
    } else if((yearInput - 4) %12 === 10){
        alert("Dog");
    } else if((yearInput - 4) %12 === 11){
        alert("Pig");
    }
} else {
    console.log("Not valid input");
}

