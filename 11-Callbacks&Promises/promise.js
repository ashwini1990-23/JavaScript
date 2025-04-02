console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("You are done..");
        resolve("John");
    }, 1000)
})

prom1.then((a) => {
    console.log(a);
})