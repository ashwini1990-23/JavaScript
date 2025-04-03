let a = prompt("Enter first number");

let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry it's wrong");
}
let sum = parseInt(a) + parseInt(b);

//Error handling
try {
    console.log("Sum is", sum * x);
} catch (error) {
    console.log("It's an error..");
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}
finally {
    console.log("Files are being closed..")
}
