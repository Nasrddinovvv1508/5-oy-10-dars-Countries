// https://restcountries.com/v3.1/all
// Elements
let countryCards = document.querySelector(`.country_cards`);
let select = document.getElementById(`slct`);

function getAPI() {
    fetch(`https://restcountries.com/v3.1/all`)
        .then((data) => {
            return data.json();
        })
        .then((countries) => {
            countries.forEach(countrie => {
                countryCards.innerHTML += createCard(countrie);
            });
        })
};
getAPI();


function createCard(countrie) {
    return `
    <div class="country_card shadow-md rounded cursor-pointer hover:shadow-xl" style="min-width: 264px">
        <img width="264" style="width: 264px; height: 160px;" src="${countrie.flags.png}" alt="countrie">
        <div class="about pt-6 ps-6 pb-12">
            <h3 class="font-extrabold text-lg mb-4">${countrie.name.common}</h3>
            <p class="text-sm">
                <span class="font-semibold">
                    Population:
                </span>
                <span class="font-light text-sm">${countrie.population}</span>
            </p>
            <p>
                <span class="font-semibold">
                    Region:
                </span>
                <span class="font-light">${countrie.region}</span>
            </p>
            <p>
                <span class="font-semibold">
                    Capital:
                </span>
                <span class="font-light">${countrie.capital}</span>
            </p>
        </div>
    </div>
    `
};

