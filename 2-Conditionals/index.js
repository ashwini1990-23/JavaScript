console.log("Conditionals");

let age = 4;

if (age > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

//Practice test
//1: Use logical operator to find wheteher age is between 10 & 20

let age1 = 16;
if (age1 > 10 && age1 < 20) {
    console.log("Age is between 10 and 20");
}
else {
    console.log("Age is not between 10 and 20");
}
//2: Number is divisible by 2and 3
let num = 8;
if ((num % 2 == 0) && (num % 3 == 0)) {
    console.log("True");
}
else {
    console.log("False");
}

//Ternary operator
let age2 = 1;
const c = (age2 > 18) ? console.log("You can Drive") : console.log("You cant drive");