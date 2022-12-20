let names = ["Bob", "Jill"];
let surname = ["Gregory", "Wurtz"]
let fullName= [];

for(let i = 0; i < names.length; i++) {
    let result = (i + 1) + ". " + names[i] + " " + surname[i];
    let result2 = `${i + 1}. ${names[i]} ${surname[i]}`
    console.log(result2);
    fullName.push(result);
}