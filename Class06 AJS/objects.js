let cat = {
  isHungry: false,
  name: "Cat1",
  meow: function () {
    console.log("Meow");
  },
};
// console.log(cat);

let cat1 = Object.create(cat);
cat1.name = "Cat2";
cat1.isHungry = true;
cat1.color = "black";
// console.log(cat1);

let cat2 = {
  ...cat,
  name: "Cat3",
  color: "blue",
  age: 10,
};

// console.log(cat2);

let person = {
  name: "Anes",
  age: 21,
};

let personAdress = {
  street: "Petar Pop Arsov",
  number: "bb",
};

// let personWithAdress = {
//   name: person.name,
//   age: person.age,
//   adress: personAdress.street,
//   number: personAdress.number,
// };

let newAdress = {
  street: "Partizanska",
  number: 100,
};

let personWithAdress = Object.assign(person, personAdress);
// console.log(personWithAdress);
let personWithNewAdress = Object.assign(personWithAdress, newAdress);
// console.log(personWithNewAdress);

let personWithAdressSpread = {
  ...person,
  ...personAdress,
};

let personWithNewAdressSpread = {
  ...personWithAdressSpread,
  ...newAdress,
};

let appConfiguration = {
  apiKey: "value",
  userToken: "Token",
  userSecrets: "",
  encoding: "",
  font: "",
  baseUrl: "",
};

// Object.freeze(appConfiguration);
// appConfiguration.apiKey = "10";
// appConfiguration.name = "Anes";
// delete appConfiguration.encoding;
// console.log(appConfiguration);

// console.log(Object.isFrozen(appConfiguration));
Object.seal(appConfiguration);
delete appConfiguration.apiKey;
appConfiguration.encoding = "UTF8";
// console.log(appConfiguration);

let trainer = {
  firstName: "Anes",
  lastName: "Demisoski",
  age: 21,
  academy: "Web Development",
  courses: ["javascript basic", "javascript advanced", " hmtl", "css"],
};

let objectKeys = Object.keys(trainer);
// console.log(objectKeys);

for (let key of Object.keys(trainer)) {
  //   console.log(key);
  //   console.log(trainer[key]);
}

for (let key in trainer) {
  //   console.log(key);
}

let objectValues = Object.values(trainer);
// console.log(objectValues);

let objectEntries = Object.entries(trainer);
// console.log(objectEntries);

for (let [key, value] of objectEntries) {
  //   console.log(key);
  //   console.log(value);
}
