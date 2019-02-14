  const searchInput = document.querySelector('.search')
  const searchSuggestions = document.querySelector('.suggestions')
  
  const endpoint =
   'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];
  const prom = fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data)); //console.log(data));
  // console.log(prom);

  const findMatches = function (worldToMatch, cities) {
   return cities.filter(place => {
    const regex = new RegExp(worldToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex);
   })
  }
 
  function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const displayMatches = function () {
   // console.log(this.value);
   const matchArray = findMatches(this.value, cities);
   // console.log(matchArray);
   const html = matchArray.map(place => {
    // from some reason this works well, source https://tfrommen.de/javascript-30-day-6-typeahead/
    cityName = place.city.replace(new RegExp(this.value, 'gi'), (match) => `<span class="hl">${match}</span>`);
    stateName = place.state.replace(new RegExp(this.value, 'gi'), (match) => `<span class="hl">${match}</span>`);
    // and this is changing capsize, it's reasonable but on Wes Bos movie it works, how?
    // const regex = new RegExp(this.value, 'gi');
    // const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    // const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
   <li>
   <span class="name">${cityName}, ${stateName}</span>
   <span class="population">${numberWithCommas(place.population)}</span>
   </li>
   `;
   }).join('');
   searchSuggestions.innerHTML = html;
   // this part I had to add, Wes Bos didn't need this, why?
   if (this.value.length == 0) {
    searchSuggestions.innerHTML = '';
   }
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
