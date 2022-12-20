let array = [1, 2, 3, 4 ,5];

function sumOfNumbers(inputArray) {
    let result = 0;
    for(let i = 0; i < 5; i++) {
        result += inputArray[i];
    }
    return result;
}

let sum = sumOfNumbers(array);
console.log(sum);