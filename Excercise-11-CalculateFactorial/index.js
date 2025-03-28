//Write a program to calculate factorial of a number 1)using reduce and 2)using for loops
//Ex: 1!=1*1=1,
//2!=2*1=2

//1:using reduce
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.reduce((a, b) => {
//     return a * b;
// }));


// //2:Using for loop
// let factorial = 1;
// for (let i = 1; i <= arr.length; i++) {
//     factorial = factorial * arr[i];

// }
// console.log(factorial);


//Solution from CodeWithHarry channel
let a = 7

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr);
    let c = arr.slice(1,).reduce((a, b) => a * b)
    return c
}


function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))