import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

const SearchDrinks = () => {
  const [city, updateCity] = useState("");
  const [drink, updateDrink] = useState("");
  const [weather, updateWeather] = useState({});

  //const weatherURL =
  // "https://api.openweathermap.org/data/2.5/weather?q=" +
  // city +
  // "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
  // getWeather();

  //const cocktailURL =
  // "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;

  // const [clouds, getClouds] = useState(null);
  // const [temp, getTemp] = useState(null);
  // const [wind, getWind] = useState(null);
  // // const [myWeather, getMyWeather] = useState(null);
  // const [drink1NameEl, getDrink1NameEl] = useState(null);
  // const [drink1NameModal, getdrink1NameModal] = useState(null);
  // const [ingredientsEl, getIngredientsEl] = useState(null);
  // const [recipeEl, getRecipeEl] = useState(null);
  // const [userInputEl, getUserInputE1] = useState("");
  // const [weatherButton, getWeatherButton] = useState(null);

  // if (city != null) {
  //     const weatherURL =
  //         "https://api.openweathermap.org/data/2.5/weather?q=" +
  //         city +
  //         "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
  //     getWeather();
  // }

  

  function getTheWeather() {
    // uses the city "state" variable to fill out the queryURL's
    // makes the call, on data returned...updates state again (a different state), our markup will then be re rendered with our desired output

    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
    getWeather(weatherURL);
  }

  // this markup will be re-rendered when state is updated
  return (
    <div>
      <div className="dropdown is-mobile ">
        <div className="column is-fullwidth">
          <label className="label">Choose Weather</label>
          <div className="control is-fullwidth">
            <div className="select ">
              <select>
                <option>Select dropdown</option>
                <option>Sun</option>
                <option>Clouds</option>
                <option>Snow</option>
                <option>Rain</option>
                <option>Windy</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column">
          <label className="label">Choose Music</label>
          <div className="control is-fullwidth">
            <div className="select ">
              <select>
                <option>Select dropdown</option>
                <option>Jazz</option>
                <option>Pop</option>
                <option>Classic</option>
                <option>Rap</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-mobile">
          <label className="label">Choose Liquor</label>
          <div className="control">
            <div className="select is-fu">
              <select>
                <option>Select dropdown</option>
                <option>Bourbon</option>
                <option>whisky</option>
                <option>Gin</option>
                <option>Vodka</option>
                <option>Brandy</option>
                <option>Rum</option>
                <option>Tequila</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="pb-3">
          <label className="label">
            Enter a city name to see your recommended drink
          </label>
          <input
            id="userInput"
            className="input is-primary is-medium"
            type="text"
            placeholder="Please type your city name..."
            onChange={((e) => {updateCity(e.target.value)})}
          />
        </div>
        <button
          id="weatherButton"
          className="button is-primary is-outlined has-text-black is-rounded city-button"
          onClick={getTheWeather}
        >
          Pick Your Poison
        </button>
      </div>
      <div class="container" id="issueContainer">
        <p class="is-size-4 has-text-centered has-text-primary has-background-primary-light">
          <br/>
          {weather ?('Here is the weather for: ' + weather.name) : ''}
          <br/>
          {weather.weather ? weather.weather[0].description : ''}
          <br/>
          {weather.main ? weather.main.temp : ''}
        </p>
      </div>
      <div>
        <p></p>
      </div>

      <div class="columns is-centered is-desktop">
        <div class="column is-6">
          <div class="tile is-parent has-text-centered p-5">
            <article class="tile is-child box">
              <p
                id="drink1Name"
                class="drinkNames is-size-2 mb-5 has-text-primary"
              >
                Drink Name 1
              </p>
              <figure class="image is-4by3">
                <img
                  id="image"
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder"
                />
              </figure>
              <button
                class="button is-primary is-outlined has-text-black is-rounded mt-4 recipe-button"
                id="btn"
              >
                View Recipe
              </button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );

  // useEffect(() => {
  //   axios.get(weatherURL).then(
  //     (event) => {
  //       getUserInputE1(event.target.value).then((response) => {
  //         getCity(response.data);
  //         getClouds(response.data);
  //         getTemp(response.data);
  //         getWind(response.data);
  //         // getMyWeather(response.data);
  //         getWeatherButton(response.data);
  //         getUserInputE1(response.target.value);
  //       });
  //     },
  //     [weatherURL]
  //   );

  //   useEffect(() => {
  //     axios.get(cocktailURL).then((response) => {
  //       getDrink(response.data);
  //       getDrink1NameEl(response.data);
  //       getdrink1NameModal(response.data);
  //       getIngredientsEl(response.data);
  //       getRecipeEl(response.data);
  //     });
  //   }, [cocktailURL]);
  // });

  // function matchIngredient(code) {
  //   // var code = prompt("Please enter your city", "Ex: Chapel Hill");
  //   console.log(code + " is in matchingredient function");
  //   const ingredientArr = [
  //     {
  //       min: 200,
  //       max: 299,
  //       spirit: "bourbon",
  //     },
  //     {
  //       min: 300,
  //       max: 399,
  //       spirit: "whisky",
  //     },
  //     {
  //       min: 500,
  //       max: 599,
  //       spirit: "gin",
  //     },
  //     {
  //       min: 600,
  //       max: 699,
  //       spirit: "vodka",
  //     },
  //     {
  //       min: 700,
  //       max: 799,
  //       spirit: "brandy",
  //     },
  //     {
  //       min: 800,
  //       max: 802,
  //       spirit: "rum",
  //     },
  //     {
  //       min: 802,
  //       max: 805,
  //       spirit: "tequila",
  //     },
  //   ];
  //   ingredientArr.forEach((obj) => {
  //     if (code >= obj.min && code < obj.max) {
  //       var drink = obj.spirit;
  //       console.log(drink);

  //       getDrink(drink);
  //       // return obj.spirit
  //     }
  //   });
  //   if (ingredientArr.length > 0) {
  //     return ingredientArr[0];
  //   }

  //   return false;
  // }

  // function getDrink(drink) {
  //   console.log(drink + "is in get drink function");
  //   var drinkAPI =
  //     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
  //   //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  //   //"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
  //   console.log(drinkAPI);
  //   fetch(drinkAPI)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       //   console.log(data.drinks[0].idDrink);
  //       //   console.log(data.drinks[0].strDrinkThumb);

  //       function getRandomInt(max) {
  //         return Math.floor(Math.random() * Math.floor(max));
  //       }
  //       // console.log(getRandomInt(data.drinks.length));
  //       var randomInt = getRandomInt(data.drinks.length);
  //       console.log(randomInt);
  //       /////////////////////////////

  //       //************question for Sean here
  //       var drink1Name = data.drinks[randomInt].strDrink;
  //       //************question for Sean here^^^^^^^^^^^

  //       console.log(drink1Name);
  //       var drink1API =
  //         "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
  //         drink1Name;
  //       drink1NameEl.textContent = drink1Name;
  //       drink1NameModal.textContent = drink1Name;
  //       fetch(drink1API)
  //         .then(function (response) {
  //           return response.json();
  //         })
  //         .then(function (data) {
  //           console.log(data);

  //           var recipeArray = [
  //             {
  //               recipe: data.drinks[0].strInstructions,
  //               picture: data.drinks[0].strDrinkThumb,
  //             },
  //           ];

  //           var ingredientArray = [
  //             data.drinks[0].strIngredient1,
  //             data.drinks[0].strIngredient2,
  //             data.drinks[0].strIngredient3,
  //             data.drinks[0].strIngredient4,
  //             data.drinks[0].strIngredient5,
  //             data.drinks[0].strIngredient6,
  //             data.drinks[0].strIngredient7,
  //           ];
  //           recipeEl.textContent = recipeArray[0].recipe;
  //           console.log(recipeArray);
  //           ingredientsEl.textContent = ingredientArray;
  //           console.log(ingredientArray);
  //           console.log(ingredientArray);
  //           document.getElementById("image").src = data.drinks[0].strDrinkThumb;

  //           // var recipe1 = data.drinks[0].strInstructions;
  //           // var glass1 = data.drinks[0].strGlass;
  //           // var alcohol1 = data.drinks[0].strInstructions;
  //           // var recipe1 = data.drinks[0].strInstructions
  //           // console.log(recipe1);
  //         });
  //     });
  // }

  function getWeather(requestURL) {
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // set the state for weather
        console.log('Here is the data returned from the fetch call: ', data);
        updateWeather(data);
      });

    if (city) {
    }
  }
};

export default SearchDrinks;
