let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let result = 0;
for(let i = 0; i < array.length; i++) {
    result += array[i];
}

console.log(`The sum is: ${result}`);

let numberList = document.getElementById("numbersList");

array.forEach(number => {
    let listItem = document.createElement('li');
    listItem.textContent = number;
    numberList.appendChild(listItem);
  });

let sum = document.getElementById("result");
sum.textContent = `The sum is: ${result}`;

