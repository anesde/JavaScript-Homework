let array = ["Hello ", " there", " students", " of", " SEDC", "!"];

function bigString(argument) {
    let result = " ";
    for(let i = 0; i < argument.length; i++) {
        result += argument[i];
    }
    return result;
}

let sum = bigString(array);
console.log(sum);
