"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};
const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">"${data.name.common}"</h3>
    <h4 class="country__region">"${data.region}"</h4>
    <p class="country__row"><span>👫</span>"${(
      +data.population / 1000000
    ).toFixed(1)}people"</p>
     <p class="country__row"><span>🗣️</span>"${data.languages.hin}"</p>
     <p class="country__row"><span>💰</span>"${data.currencies.INR.name}"</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">"${data.name.common}"</h3>
    <h4 class="country__region">"${data.region}"</h4>
    <p class="country__row"><span>👫</span>"${(
      +data.population / 1000000
    ).toFixed(1)}people"</p>
     <p class="country__row"><span>🗣️</span>"${data.languages.eng}"</p>
     
  </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
*/
//getCountryData("india");
//getCountryData("usa");

/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data.currencies.INR.name);
    //Render country
    renderCountry(data);

    //Get neighbour country
    const [neighbour] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;

    const requesttwo = new XMLHttpRequest();
    requesttwo.open(
      "GET",
      `https://restcountries.com/v3.1/alpha?codes=${neighbour}`
    );
    requesttwo.send();

    requesttwo.addEventListener("load", function () {
      const [dataTwo] = JSON.parse(this.responseText);
      console.log(dataTwo);
      renderCountry(dataTwo, "neighbour");
    });
  });
};
getCountryAndNeighbour("india");
*/
// const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch("https://restcountries.com/v3.1/name/india");
// console.log(request);
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found!");
      return getJSON(
        `https://restcountries.com/v3.1/alpha?codes=${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 😡`);
      renderError(`Something went wrong 😡 😡 ${err.message}.Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("india");
});

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");
    } else {
      reject(new Error("You LOST"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisfying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log("I waited for 1 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("i Waited for 2 second");
    return wait(1);
  })
  .then(() => {
    console.log("i Waited for 3 second");
    return wait(1);
  })
  .then(() => {
    console.log("i Waited for 4 second");
    return wait(1);
  });

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("problem!")).catch((x) => console.error(x));
const getPostion = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   postion => resolve(postion),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPostion().then((pos) => console.log(pos));

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPostion();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //country data
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
    //   console.log(res)
    // );
    // The above code is similar to below code, so better to use the below one
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    //this will be returned from the async function
    return `You are in ${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    console.log(`${err}`);
    renderError(`${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};
console.log("1: First data");
// whereAmI()
//   .then((city) => console.log(`2:${city}`))
//   .catch((err) => console.log(`2:${err.message}`))
//   .finally(() => console.log("3:Third data"));
//The below code is equivalant of above one
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log("3:Third data");
})();

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    //console.log(data1.capital, data2.capital, data3.capital);
    //Running promises at the same time
    const coundata = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(coundata.map((d) => d[0].capital));
  } catch (err) {
    console.Error(err);
  }
};
get3Countries("india", "canada", "usa");

//Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
