// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3000)
//     })
// }

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //POST request
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    console.log(data);

}

async function main() {
    console.log("Data is loading");
    console.log("Reading is done");

    let data = await getData();

    // console.log(data);

    console.log("data processing is done.");
}

main();