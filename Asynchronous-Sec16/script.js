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
    // countriesContainer.style.opacity = 1;
}

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

//////////////////////
// Building a Simple Promise
