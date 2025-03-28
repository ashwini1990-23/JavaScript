/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
// Answer
let randomNum = Math.random();
let first, second, third;
//Dividing random number in 3 parts
// 0, 0.33, 0.66, 1
//Generate the first word
if (randomNum < 0.33) {
    first = "Crazy";
}
else if (randomNum >= 0.33 && randomNum < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

//Generate the second word
randomNum = Math.random();
if (randomNum < 0.33) {
    second = "Engine";
}
else if (randomNum >= 0.33 && randomNum < 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}

//Generate the third word
randomNum = Math.random();
if (randomNum < 0.33) {
    third = "Bros";
}
else if (randomNum >= 0.33 && randomNum < 0.66) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);


//Another way to solve this
//Answer -2
let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let obj3 = {
    1: "Hub",
    2: "Limited",
    3: "Bros"
}

var ranndom1 = Math.floor(Math.random() * 3) + 1;

// console.log(Math.random() * 3);
console.log(Math.floor(Math.random() * 3));
console.log(ranndom1);
var ranndom2 = Math.floor(Math.random() * 3) + 1;
var ranndom3 = Math.floor(Math.random() * 3) + 1;

console.log(`${obj1[ranndom1]} ${obj2[ranndom2]} ${obj3[ranndom3]}`);