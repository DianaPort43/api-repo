let searchBtn = document.querySelector('.search-btn');
let countryInp = document.querySelector('#searchInput');
let result = document.querySelector('#result');

async function searchCountries() {
  let countryName = countryInp.value;

  try {
    var url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }

    var data = await response.json();

    if (data === null || data.length === 0) {
      result.innerHTML = "No search results. Please try again!";
    } else {
      result.innerHTML = `
            <img src="${data[0].flags.png}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continent}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div> 
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).join(', ')}</span>
                </div>
            </div>    
      `;
    }
  } catch (error) {
    console.error(error);
    result.innerHTML = "Enter full country name";
  }
}

searchBtn.addEventListener('click', searchCountries);
