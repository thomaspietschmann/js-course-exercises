'use strict';

/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row">
          <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
         </p>
         <p class="country__row">
         <span>🗣️</span>${data.languages[0].name}
         </p>
         <p class="country__row">
         <span>💰</span>${data.currencies[0].name}
         </p>
         </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); // data[0]
//     renderCountry(data);
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); // data[0]
//     console.log(data);
//     renderCountry(data);

// Render country 1
// Get neighbour country (2)

//     const [neighbour] = data.borders;
//     if (!data.borders) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('gb');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.eu/rest/v2/name/${'portugal'}`);
// console.log(request);

// THEN is a method available on promises!
// always returns a promise

const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found.');
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'neighbour country not found'
      ); // Promise needs to be returned! Do not chain next then directly to avoid callback hell
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      console.log(err);
      renderError(`Something went wrong :( ${err.message}`); // adding catch at the end will catch ALL errors in the promise chain
      // !!!!!!!!!!!! CATCH also returns a promise
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // Will ALWAYS be called. Used to hide loading spinner, for example
};

btn.addEventListener('click', () => {
  getCountryData('australia');
});

const whereAmI = function (lat, lng) {
  console.log(lat, lng);
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response.status);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      // if (response.status === 403) throw new Error('Too many requests (403)');
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return data.country;
    })
    .then(country => fetch(`https://restcountries.eu/rest/v2/name/${country}`))
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Could not fetch country information ${response.status}`
        );
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      return data[0];
    })
    .then(data => {
      const html = `
      <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row">
          <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
         </p>
         <p class="country__row">
         <span>🗣️</span>${data.languages[0].name}
         </p>
         <p class="country__row">
         <span>💰</span>${data.currencies[0].name}
         </p>
         </div>
      </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
    })
    .catch(err => console.error(err.message))
    .finally((countriesContainer.style.opacity = 1));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


console.log('Test start'); // 1 top level code
setTimeout(() => console.log('0 sec timer'), 0); // 5 because callback queue, blocked by microtasks
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); // 3 because microtasks queue
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
}); // 4 because microtasks queue
console.log('Test end'); // 2 top level code

*/

// BUILD PROMISES

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN!!!');
    } else {
      reject(new Error('You lost your money...'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(1);
  })
  .then(() => console.log('5 seconds passed. End'));

// Create resolved Promise immediately

Promise.resolve('resolved value').then(msg => console.log(msg));
Promise.reject(new Error('error value')).catch(err => console.error(err));
