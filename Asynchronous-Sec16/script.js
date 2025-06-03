'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
//  Making AJAX call usnig XMLHttpRequest function
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`); // https://restcountries.com/v3.1/name/portugal
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
}

getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
*/

/*
// Callback Hell example
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`); // https://restcountries.com/v3.1/name/portugal
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render Country 1
        renderCountry(data);

        // Get Neighbour Country (2)
        const [neighbour] = data.borders; // const neighbour = data.borders?.[0]; = optional chainig to account for countries with no borders property
        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`); // https://restcountries.com/v3.1/name/portugal
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            // Render country 2
            renderCountry(data2, 'neighbour');
        })

    });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
*/

/*
// Promises and Fetch API
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         }).then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         })
// };

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);

            const neighbour = data[0].borders[0];
            console.log(neighbour);
            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

        })
        // Chaining Promises
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderCountry(data, 'neighbour');
        })
    //     const neighbour1 = data.borders[1];
    //     if (!neighbour1) return;

    //     // Country 3
    //     return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`);
    // })
    // .then(response => response.json())
    // .then(data => renderCountry(data, 'neighbour'));
};

// getCountryData('portugal');
*/

/////////////////////////
// Handling Rejected Promises
// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     // countriesContainer.style.opacity = 1;
// }

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

/*const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);

            const neighbour = data[0].borders[0];
            console.log(neighbour);
            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

        })
        // Chaining Promises
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderCountry(data, 'neighbour');
        })
        .catch(err => {
            console.error(`${err} `);
            renderError(`Something went wrong : ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })

    //     const neighbour1 = data.borders[1];
    //     if (!neighbour1) return;

    //     // Country 3
    //     return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`);
    // })
    // .then(response => response.json())
    // .then(data => renderCountry(data, 'neighbour'));
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
});

getCountryData('sdghjg'); */
///////////////////

///////////////
// Throwing errors manually

const getJSON = function (url, errMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        console.log(response);
        if (!response.ok)
            throw new Error(`${errMsg} (${response.status})`);

        return response.json();
    })
};
/*
const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            console.log(response);
            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);

            return response.json();
        })
        .then((data) => {
            renderCountry(data[0]);

            // const neighbour = data[0].borders[0];
            const neighbour = 'sjhjs';
            console.log(neighbour);
            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

        })
        // Chaining Promises
        .then(response => {
            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);
            return response.json()
        })
        .then(data => {
            console.log(data);
            renderCountry(data, 'neighbour');
        })
        .catch(err => {
            console.error(`${err} `);
            renderError(`Something went wrong : ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })

    //     const neighbour1 = data.borders[1];
    //     if (!neighbour1) return;

    //     // Country 3
    //     return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`);
    // })
    // .then(response => response.json())
    // .then(data => renderCountry(data, 'neighbour'));
};*/

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then((data) => {
            renderCountry(data[0]);
            console.log(data);
            const neighbour = data[0].borders[0];
            // const neighbour=undefined;
            console.log(neighbour);
            if (!neighbour)
                throw new Error('No neighbour country found!');

            // Country 2
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');

        })
        // Chaining Promises
        .then(data => {
            console.log(data);
            renderCountry(data, 'neighbour');
        })
        .catch(err => {
            console.error(`${err} `);
            renderError(`Something went wrong : ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })

    //     const neighbour1 = data.borders[1];
    //     if (!neighbour1) return;

    //     // Country 3
    //     return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`);
    // })
    // .then(response => response.json())
    // .then(data => renderCountry(data, 'neighbour'));
};

btn.addEventListener('click', function () {
    getCountryData('australia');
});

// getCountryData('sdghjg');
////////////////////////////

/*
////////////////////////
// Event Loop in practice
console.log('Test start');
setTimeout(() => console.log('0 Sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000; i++) { }
    console.log(res)
});
console.log('Test end');
/////////////////
*/

/*
//////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery draw is happening :)')
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You win..');
        } else {
            reject(new Error('You lost your money :('));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2).then(() => {
    console.log('I waited for 2 seconds..');
    return wait(1);
}).then(() => console.log('I waited for 1 second..'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('error')).catch(x => console.error(x));
*/
//////////////////

/*
///////////////
// Consuming promises using async and await

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

// Promisifying the Geolocation
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    try {// Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
        //if response object doesnot have ok property set tot rue then throw new error :Error handling
        if (!resGeo.ok) throw new Error(`Problem getting location data`);

        const dataGeo = await resGeo.json();
        //  console.log('Geo Data', dataGeo);

        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryCode}`);
        //  console.log(res);
        if (!res.ok) throw new Error(`Problem getting country`)
        const data = await res.json();
        //  console.log(data);
        renderCountry(data[44]);

        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch (err) {
        // console.error(err);
        renderError(`Something went wrong..${err.message}`);
        // Reject promise (manually) retruned from async function
        throw err;
    }
}

console.log('1: Will get location');
// const city = whereAmI();
// console.log('2: ',city);
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message} `))
//     .finally(() => console.log('3: Finished getting location'));

// Calling async function from another async function
(async function () {
    try {
        const res = await whereAmI();
        console.log(`2: ${res}`);
    } catch (err) {
        console.error(`2: ${err.message}`);
    }

    console.log('3: Finished getting location');
})();
*/

////////////
// Running Promises in Parallel : Promise Combinators
// 1. Promise.all() 
const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`),
        ]);
        console.log(data);
        console.log(data[0]);
        console.log(data.map(d => d[0].capital));

    } catch (err) {
        console.error(err.message);
    }
}
get3Countries('portugal', 'canada', 'tanzania');

// 2: Promise.race()
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log('Promise.race() : ', res[0].capital);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long!`))
        }, sec * 1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/mexico`),
    timeout(5),
])
    .then(data => console.log(data[0]))
    .catch(err => console.error(err));

// 3: Promise.allSettled()
Promise.allSettled(
    [Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
    ]
)
    .then(data => console.log('Promise.allSettled() :', data))
    .catch(err => console.error(err));


// 4: Promise.any()
Promise.any(
    [Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
    ]
)
    .then(data => console.log('Promise.any() :', data))
    .catch(err => console.error(err));