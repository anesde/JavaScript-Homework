// Generating Arrays
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
function divisibleNumbersByThree() {
    const numbersArray = [];
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0) {
            numbersArray.push(i);
        }
    }
    return numbersArray;
}

// console.log(divisibleNumbersByThree());

// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
function divisibleEvenNumbers() {
    const numbersArray = [];

    for (let i = 0; i <= 1000; i++) {
        if (i % 4 === 0 && i % 2 === 0) {
            numbersArray.push(i);
        }
    }
    return numbersArray;
}
// console.log(divisibleEvenNumbers());

// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
function allNumbersEndWithOne() {
    const numbersArray = [];
    for (let i = 0; i <= 1000; i++) {
        if (i % 10 === 0) {
            numbersArray.push(i);
        }
    }
    return numbersArray;
}
// console.log(allNumbersEndWithOne());

// Clean Arrays
// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
function cleanArray() {
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
    let emptyArray = [];
    for (let i = 0; i < test.length; i++) {
        if (test[i]) {
            emptyArray.push(test[i]);
        }
    }
    return emptyArray;
}
// console.log(cleanArray());

// Create a function that cleans an array of any values and leaves only NUMBERS
function leaveNumbers() {
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
    let emptyArray = [];
    for (let i = 0; i < test.length; i++) {
        if (typeof test[i] === "number") {
            emptyArray.push(test[i]);
        }
    }
    return emptyArray;
}
// console.log(leaveNumbers());

// Create a function that cleans an array of any values and leaves only STRINGS
function leaveStrings() {
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
    let emptyArray = [];
    for (let i = 0; i < test.length; i++) {
        if (typeof test[i] === "string") {
            emptyArray.push(test[i]);
        }
    }
    return emptyArray;
}
// console.log(leaveStrings());

// Random color page

// // rgb(255 255 255)
// let red = Math.floor(Math.random() * 255);
// let green = Math.floor(Math.random() * 255);
// let blue = Math.floor(Math.random() * 255);
// let htmlPage = document.querySelector('body');
// htmlPage.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
// htmlPage.innerText = `${red.valueOf()} ${green.valueOf()} ${blue.valueOf()} `;

// Title Generator
// let text = document.getElementById('text');
// let fontSize = document.getElementById('fontSize');
// let color = document.getElementById('color');
// let myBtn = document.getElementById('btn').addEventListener('click', function () {
//     let header = document.createElement('h1');
//     header.style.color = color.value;
//     header.style.fontSize = fontSize.value;
//     header.innerText = text.value;
//     document.querySelector('body').append(header);
// })

// Student constructor function
function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        return this.birthYear;
    }
    this.getInfo = function () {
        this.firstName + this.lastName;
        return `This is student ${firstName} ${lastName}`
    }
    this.getGradesAverage = function () {
        let result = 0;
        for (let i = 0; i < grades.length; i++) {
            result += this.grades[i];
        }
        let result2 = result / grades.length;
        return result2;
    }
}

let students = new Student('Anes', 'Demishoski', 2001, 'SEDC', [6, 7, 8, 9, 2, 3, 5]);
console.log(students);
console.log(students.getGradesAverage());