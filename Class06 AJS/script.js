// console.log(typeof document); // -> object
// console.log(typeof document.getElementById); // -> function
// console.log(typeof []); // -> object
// console.log(typeof console); // -> object
// console.log(typeof console.log); // -> function
// console.log(console);

// consoloe.log(window);

// function sayHello(name) {
//   console.log(`Hey there ${name}`);
// }

// sayHello("Anes");
// window.sayHello("Todor");

// let something = "It's a thing";
// console.log(something);
// console.log(window.something);

// var somethingElse = "Its something else";
// console.log(window.somethingElse);
// swapi people
// function Person(
//     name,
//     height,
//     mass,
//     hair_color,
//     skin_color,
//     eye_color,
//     birth_year,
//     gender,
//     homeworld,
//     films,
//     species,
//     vehicles,
//     starships,
//     created,
//     edited,
//     url
//   ) {
//   this.name = name;
//   this.height = height;
//   this.mass = mass;
//   this.hairColor = hair_color;
//   this.skinColor = skin_color;
//   this.eyeColor = eye_color;
//   this.birthYear = birth_year;
// }

function Dog(name, color, age, favouriteFood) {
  this.name = name === undefined ? "unnamed" : name;
  //   this.name = name ?? "unnamed";
  this.color = color;
  this.age = age;
  this.hasOwner = false; // This is default value
  this.favouriteFood = favouriteFood;
  this.bark = function () {
    console.log("Ne ti kasnit samo ti plasit");
  };
  this.eat = function (food) {
    this.favouriteFood.forEach((fav) => {
      console.log(fav);
    });
  };
}
