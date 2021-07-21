import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";

const SearchDrinks = () => {
  const [city, updateCity] = useState("");
  const [drink, updateDrink] = useState({});
  const [weather, updateWeather] = useState({});
  //const numberDrink=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  //const drinkData =

  function getTheWeather() {
    // uses the city "state" variable to fill out the queryURL's
    // makes the call, on data returned...updates state again (a different state), our markup will then be re rendered with our desired output

    const weatherURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
    getWeather(weatherURL);
  }

  function getTheDrink() {
    // uses the city "state" variable to fill out the queryURL's
    // makes the call, on data returned...updates state again (a different state), our markup will then be re rendered with our desired output
    // console.log(drink);
    getDrinks().then(function({drinks}) {
      const drink = drinks[getRandomInt(drinks.length)];
      updateDrink(drink);
      // console.log('line 28', drink);
    })
    // const drinkAPI =
    //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    // getDrink(drinkAPI);
  }

  function getWeather(requestURL) {
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // set the state for weather
        console.log(
          "Here is the Weather data returned from the fetch call: ",
          data
        );
        updateWeather(data);
      });

    if (city) {
    }
  }

  
  function getDrinks() {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(
        "Here is the Drink data returned from the fetch call: ",
        data
        );
        return data;
      // console.log(drink.drinks.idDrink);
      // updateDrink(data);
      // updateDrink(data);
    });
  }
  

  function getDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(
          "Here is the Drink data returned from the fetch call: ",
          data
        );
        // console.log(drink.drinks.idDrink);
        updateDrink(data);
        // updateDrink(data);
      });
  }

  function getRandomInt(max) {

    // uses the city "state" variable to fill out the queryURL's
    // makes the call, on data returned...updates state again (a different state), our markup will then be re rendered with our desired output
    return Math.floor(Math.random()* max)
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
          <form method="get" onSubmit={
            (e) => {
              e.preventDefault();
              getTheWeather();
              getTheDrink();
              // getRandomInt();
            }
          }>
        <div className="pb-3">
          <label className="label">
            Enter a city name to see your recommended drink
          </label>
          <input
            id="userInput"
            className="input is-primary is-medium"
            type="text"
            placeholder="Please type your city name..."
            onChange={(e) => {
              updateCity(e.target.value);
            }}
          />
        </div>
        <button
          id="weatherButton"
          className="button is-primarywhite is-outlined has-text-black is-rounded city-button"
          type="submit"
        >
          Pick Your Poison
        </button>
          </form>
      </div>
      <div className="container" id="issueContainer">
        <p className="is-size-4 has-text-centered has-text-primary has-background-primary-light p-2">
          {weather ? "Here is the weather for: " + weather.name : ""}
          
        </p>
        
      </div>
      <div className=" has-text-centered has-text-primary p-2">
        <p>
          Weather Condition: <span className="textCopy"> {weather.weather ? weather.weather[0].main : ""} - {weather.weather ? weather.weather[0].description : ""} </span>
          <br />
          Current Temperature: <span className="textCopy">{weather.main ? weather.main.temp : ""}</span>
        </p>
      </div>
      <div className="columns is-centered is-desktop">
        <div className="column">
          <div className="tile is-parent has-text-left p-5">
            <article class=" is-child box">
             
              <div className="columns is-mobile" >
                {/* Drink Image */}
                <div className="column">
                  <img
                    id="image" className="image"
                    src={drink ? drink.strDrinkThumb : ""}
                    alt={drink ? drink.strDrink : ""}
                  />
                </div>
                {/* Drink Title */}
                <div class="column">
                  <div  className=" is-size-2 has-text-primary ">
                      {drink ? " Drink Title: " + drink.strDrink : ""}
                  </div>
                  {/* Ingredients */}
                  <div className="drinkDiv">
                    Ingredients:
                    <ul>
                      <li>{drink != null ?  drink.strIngredient1 + " " + drink.strMeasure1 : " "}</li>
                      <li>{drink != null ? drink.strIngredient2 + " " + drink.strMeasure2 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient3 + " " + drink.drinks[14].strMeasure3 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient4 + " " + drink.drinks[14].strMeasure4 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient5 + " " + drink.drinks[14].strMeasure5 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient5 + " " + drink.drinks[14].strMeasure5 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient6 + " " + drink.drinks[14].strMeasure6 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient7 + " " + drink.drinks[14].strMeasure7 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient8 + " " + drink.drinks[14].strMeasure8 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient9 + " " + drink.drinks[14].strMeasure9 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient10 + " " + drink.drinks[14].strMeasure10 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient11 + " " + drink.drinks[14].strMeasure11 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient12 + " " + drink.drinks[14].strMeasure12 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient13 + " " + drink.drinks[14].strMeasure13 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient14 + " " + drink.drinks[14].strMeasure14 : ""}</li>
                      <li>{drink.drinks != null ? drink.drinks[14].strIngredient15 + " " + drink.drinks[14].strMeasure15 : ""}</li>
                    </ul>
                  </div>
                  {/* Drink Instructions */}
                  <div className="drinkDiv">
                    {drink.drinks != null ? "Instructions: "  + drink.strInstructions : ""}
                  </div>
                  {/* Drink Glass Type Suggestion */}
                  <div className="drinkDiv">
                    {drink.drinks != null ? "Glass Type Suggestion: "  + drink.drinks[14].strGlass : ""}
                  </div>
                  {/* Category */}
                  <div className="drinkDiv">
                    {drink.drinks != null ? "Category: "  + drink.drinks[14].strCategory : ""}
                  </div>
                  {/* Non or Alcoholic */}
                  <div className="drinkDiv">
                    {drink.drinks != null ? "Non or Alcoholic : "  + drink.drinks[14].strAlcoholic : ""}
                  </div>
                </div>
            </div>
              
            
              {/* <button
                id="btn"
                className="button is-primarywhite is-outlined has-text-black is-rounded city-button mt-4 recipe-button"
                // onClick={selectDrink}
              >
                
                <Link
                  to={{
                    pathname: "/SingleDrink",
                    state: { drinks: drink[0] },
                  }}
                >
                  {" "}
                  View Recipe{" "}
                </Link>
              </button> */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDrinks;
