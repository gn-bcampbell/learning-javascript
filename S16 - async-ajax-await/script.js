// noinspection JSDeprecatedSymbols

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

getCountryData('portugal');
