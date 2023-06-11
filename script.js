async function searchCountries() {
  var searchKeyword = document.querySelector('#searchInput').value;
  var url = 'https://restcountries.com/v3.1/name/' + searchKeyword;
  const response = await fetch(url);
  var data = await response.json();
  if (data === null || data.length === 0) {
      gridContainer.innerHTML = "Нет результатов поиска. Попробуйте еще раз!";
    } else {
      gridContainer.innerHTML = '';

      data.forEach(function(country) {
        var countryName = country.name.common;
        var flagUrl = country.flags.svg;
        var language = Object.values(country.languages)[0];
        var startOfWeek = country.startOfWeek;
        var capital = country.capital;

        var countryDiv = document.createElement('div');
        countryDiv.classList.add('country-card');

        var flagImg = document.createElement('img');
        flagImg.src = flagUrl;
        flagImg.alt = countryName + ' flag';
        countryDiv.appendChild(flagImg);

        var nameElement = document.createElement('h3');
        nameElement.textContent = 'Name Of Country: ' + countryName;
        countryDiv.appendChild(nameElement);

        var nameElement = document.createElement('h4');
        nameElement.textContent = 'Capital: ' + capital;
        countryDiv.appendChild(nameElement);

        var languageElement = document.createElement('h4');
        languageElement.textContent = 'Official language: ' + language;
        countryDiv.appendChild(languageElement);

        var startOfWeekElement = document.createElement('h4');
        startOfWeekElement.textContent = 'Start Of Week: ' + startOfWeek;
        countryDiv.appendChild(startOfWeekElement);

        gridContainer.appendChild(countryDiv);
      });
    }
}

searchBtn.addEventListener('click', searchCountries);
