let trainer = {
  firstName: "Anes",
  lastName: "Demisoski",
  age: 21,
  academy: "Web Development",
  courses: ["javascript basic", "javascript advanced", " hmtl", "css"],
};

// we make a copy of the trainer objcet
let trainer1 = {
  ...trainer,
  firstName: "Todor",
  lastName: "Pelivanov",
};

// create a copy of trainer
let trainer2 = {};
for (let entry of Object.entries(trainer)) {
  trainer2[entry[0]] = entry[1];
}
// console.log(trainer2);

// create a copy of trainer using destructuring

let trainer3 = {};
for (let [key, value] of Object.entries(trainer)) {
  trainer3[key] = value;
}
// console.log(trainer3);

let numbers = [
  1, 2, 3, 1235145, 66123, 4, 5, 6, 123123, 451, 7, 8, 9, 10, 123, 5431,
  1234517, 12312312, 4341,
];

function sum(numArray) {
  let result = 0;
  for (let num of numArray) {
    result += num;
  }
  return result;
}

let [first, ...rest] = numbers;
// console.log(first, rest);

// function sumRecursive(numArray, sum) {
//   if (numArray.length === 0) {
//     return sum;
//   }
//   let [first, ...rest] = numArray;
//   sum += first;
//   return sumRecursive(sum, rest);
// }

// console.log(sumRecursive(0), numbers);
// console.log(sum(numbers));

let trainer10 = {
  firstName: "Anes",
  lastName: "Demisoski",
  age: 21,
  academy: "Web Development",
  courses: ["javascript basic", "javascript advanced", " hmtl", "css"],
};

function printCourses({ firstName: name, lastName, courses = [] }) {
  console.log(name, lastName);
  console.log(courses);
}
printCourses(trainer10);

let nums = [1, 2, 3, 4, 5];

function sumThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

let [first1, second, third] = nums;
let sumOfThree = sumThreeNumbers(nums[0], nums[1], nums[2]);

let sumOfThree1 = sumThreeNumbers(first1, second, third);
let sumOfThree2 = sumThreeNumbers(...nums);

console.log(sumOfThree);
console.log(sumOfThree1);
console.log(sumOfThree2);
