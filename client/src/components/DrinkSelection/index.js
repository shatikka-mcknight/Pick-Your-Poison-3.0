import React, { useState, useEffect } from "react";

const DrinkSelection = () => {
  const [drink] = useState({
    drinks: drink,
    isLoading: true,
  });
  
  
  const drinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    
  
    

  return (
    <div>
      <div className="columns is-centered is-desktop">
        <div className="column is-6">
          <div className="tile is-parent has-text-centered p-5">
            <article className="tile is-child box">

              <p
                id="drink1Name"
                className="drinkNames is-size-2 mb-5 has-text-primary"
              >Drink Title:
                {drink.drink ? (  drink[0].strDrink) : ''}
              </p>
              <figure className="image">
              <img
                  id="image"
                  src={drink.drink ? drink.drinks[0].strDrinkThumb : ""}
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

  
};

export default DrinkSelection;