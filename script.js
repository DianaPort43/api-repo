let gridContainer = document.querySelector('.grid-container');
let searchBtn = document.querySelector(".searchBtn");

async function searchCountries() {
  var searchKeyword = document.querySelector('#searchInput').value;
  var url = 'https://restcountries.com/v3.1/name/' + searchKeyword;
  const response = await fetch(url);
  var data = await response.json();
  if (data === null || data.length === 0) {
      gridContainer.innerHTML = "Нет результатов поиска. Попробуйте еще раз!";
    } else {
      gridContainer.innerHTML = '';

      });
    }
}

searchBtn.addEventListener('click', searchCountries);
