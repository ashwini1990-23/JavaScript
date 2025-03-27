//----------Loops-----------------
//for loop
let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }

//for in loop
let obj = {
    name: "John",
    role: "Engineer",
    code: "1234"
}
for (const key in obj) {
    const value = obj[key];
    console.log(key, value);
}

//for of loop
for (const c of "John") {
    console.log(c);
}

//while loop
let b = 0;
while (b < 6) {
    console.log(b);
    b++;
}

//do while loop
let p = 8;
do {
    console.log("while " + p);
    p++;
} while (p < 6);