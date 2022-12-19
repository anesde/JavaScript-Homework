function animals(num1, num2, num3) {
    let chicken = num1 * 2;
    let cows = num2 * 4;
    let pigs = num3 * 4;
    let result = chicken + cows + pigs;
    return result;
}

let result1 = animals(2, 3, 5);
let result2 = animals(1, 2, 3);
let result3 = animals(5, 2, 8);

console.log(result1);
console.log(result2);
console.log(result3);