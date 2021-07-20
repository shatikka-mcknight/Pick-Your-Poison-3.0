import React, { useState, useEffect } from "react";

const DrinkSelection = () => {
    
  const [drink, updateDrink] = useState({});

  // function getTheDrink() {
  //   // uses the city "state" variable to fill out the queryURL's
  //   // makes the call, on data returned...updates state again (a different state), our markup will then be re rendered with our desired output
    
  //   const drinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
  //   getDrink(drinkAPI);
  // }

  return (
    <div>
      <div class="columns is-centered is-desktop">
        <div class="column is-6">
          <div class="tile is-parent has-text-centered p-5">
            <article class="tile is-child box">
              <p
                id="drink1Name"
                class="drinkNames is-size-2 mb-5 has-text-primary"
              >
                {drink.drinks ? ('Drink Title: ' + drink.drinks[0].strDrink) : ''}
              </p>
              <figure class="image is-4by3">
              <img
                  id="image"
                  src={drink.drinks ? drink.drinks[0].strDrinkThumb : ""}
                  alt="Placeholder"
                />
              </figure>
              {/* <button
                id="btn"
                className="button is-primary is-outlined has-text-black is-rounded mt-4 recipe-button"
                onClick={selectDrink}
              >
                View Recipe
              </button> */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );

  // function getDrink() {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log('Here is the Drink data returned from the fetch call: ', data);
  //     // console.log(drink.drinks.idDrink);
  //     updateDrink(data);
  //   });
  
  // }
  
};

export default DrinkSelection;