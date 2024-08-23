// noinspection JSDeprecatedSymbols

'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
    ! S16 | EP 245-250: Setup + implement XMLHttpRequest on API
*/
const renderCountry = function (data, className = '') {

    const name = data.name.common;
    const flag = data.flags.svg;
    const region = data.region;
    const language = Object.values(data.languages)[0];
    const currency = Object.values(data.currencies)[0].name;

    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

/*
    ! S16 | EP 245-250: Setup + implement XMLHttpRequest on API
*/
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const name = data.name.common;
        const flag = data.flags.svg;
        const region = data.region;
        const language = Object.values(data.languages)[0];
        const currency = Object.values(data.currencies)[0].name;

        const html = `
            <article class="country">
                <img class="country__img" src="${flag}" />
                <div class="country__data">
                <h3 class="country__name">${name}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
                </div>
            </article>
            `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

// getCountryData('portugal');


/*
    ! S16 | EP 251: Welcome to Callback Hell

    Create a function that ensures countries are called in order.
    Effectively, have a callback function inside another callback function
*/
const getCountryAndNeighbour = function (country) {

    // Ajax call 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        const [neighbour] = data.borders;
        console.log(neighbour)

        if (!neighbour) return

        const request2 = new XMLHttpRequest()
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            // Render country 2
            renderCountry(data2);
        })
    });
};
// getCountryAndNeighbour('usa');

/*
    ! S16 | EP 252: Promise and Fetch API

    Fetch returns a 'Promise' with 'pending' (placeholder for a future result)
    We can chain promises instead of nesting them in callback hell.

    pending -> settled (fulfilled or rejected) -> consume 
*/
const request = fetch('https://restcountries.com/v3.1/name/portugal')
// console.log(request) //'pending'

/*
    ! S16 | EP 253: Consume Promises

    First  .then(): Callback function on response body (using json() is also a promise)
    Second .then(): Capture data from json() promise and get the data inside the response

    response contains a 'Body' that is a 'ReadableStream' -> convert it to json()
*/
const getCountryData2 = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json()) // this returns a promise to be consumed by next then())
        .then(data => renderCountry(data[0])) // this contains the actual data payload
}

// getCountryData2('portugal')

/*
    ! S16 | EP 254: Chain Promises

    whatever is returned by a promise, becomes the 'fulfilled' value, eg. neighbour country promise
*/

const getCountryData3 = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0])

            const neighbour = data[0].borders?.[0] //optional chaining for country with no borders

            // return required to allow us to chain another .then() because it returns a promise
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        .then(response => response.json())
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(err => renderError(err.message)) //! S16 | EP 255: Handle Rejected Promises / Errors from promises
}

// getCountryData3('republic of ireland')

const renderError = function (message) {
    countriesContainer.insertAdjacentText('beforeend', message)
    countriesContainer.style.opacity = 1;
}

/*
    ! S16 | EP 256: Handle Rejected Promises / Errors from promises

    Create helper function to tidy up chaining events and error handling
*/

const getJson = function (url, errorMsg = '') {
    // make sure to return the fetch so you can chain the .then()
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log(`Something went wrong: ${errorMsg}`)
            }

            return response.json();
        })
}

const getCountryData4 = function (country) {
    getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders?.[0]
            return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found')
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(err => renderError(err.message))
}

getCountryData4('vietnam')


/*
    ! S16 | EP 260: Building a Promise

    - Executor() -> resolve() -> reject()

    Promise is a special object: takes 1 argument (executor function)
    Executor function needs 2 arguments: (resolve, reject)
*/

// Create Promise
const lottery = new Promise(function (resolve, reject) {
    console.log('Lottery draw pending 🔮')
    setTimeout(function () {
        // contains async behaviour to be handled by Promise (future value of promise)
        if (Math.random() >= 0.5) {
            // pass fulfilled value of promise so it can be later consumed by .then()
            resolve('Value is greater than 0.5 🏆')
        } else {
            reject(new Error('Loser 🐡'))
        }
    }, 2000)
});

// Consume Promise
lottery.then(res => console.log(res)).catch(err => console.error(err))

// Promisfying wait timeout
const wait = function (seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2)
    .then(() => {
        // console.log('I waited for 2 seconds')
        return wait(1)
    })
    .then(() => {
        console.log('I waited for 1 second')
        return wait(3)
    })
    .then(() => {
        // console.log('I waited for 3 seconds')
    })
    .catch(err => console.warn(err))

// Imediately resolve or reject using Promise static methods (same as above)
Promise.resolve('resolved').then(x => console.log(x));
Promise.reject('rejected').catch(x => console.error(x))


/*
    ! S16 | EP 261: Promisify GeoLocation API
*/


const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // option 1: explicit
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        )
        // option 2: implicit
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
getPosition().then(pos => console.log(pos))


const whereAmI = function () {

    const { latt: lat, longt: lng } = getPosition().then(pos => {
        // console.log(pos.coords)
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })
        .then(res => {
            if (!res.ok) {
                console.warn(`Error with status code: ${res.status}`)
            }
            return res.json()
        })
        .then(data => {
            if (!data.standard.countryname) throw new Error('No data available')
            console.log(`You are in ${data.standard.countryname}`)

        }).catch((e) => {
            console.error(e.message)
        })
}

btn.addEventListener('click', whereAmI);