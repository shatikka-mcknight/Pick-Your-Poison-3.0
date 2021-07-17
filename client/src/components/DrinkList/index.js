import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';
// import DrinkSelection from './DrinkSelection';

const DrinkList = ({
  drinks,
  drinksTitle,
  showTitle = true,
  showUsername = true,
}) => {
  // if (!drinks.length) {
  //   return <h3>No Drinks Searched Yet</h3>;
  // }

  return (

    <div className="container">
      <div>
      {showTitle && <h3>{drinksTitle}</h3>}
      {drinks &&
        drinks.map((drink) => (
          <div key={drink._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/SingleDrinkList/${drink.drinkImage}`}
                >
                  {drink.drinkAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this drink on {drink.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this drink on {drink.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{drink.drinksIngredients}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/users/${drink._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
      </div>
    </div>
      
      /* <div>
        <div class="">
          <h4 class="classloginsignup bg-dark text-light p-2 center">
            1 Drink Name
          </h4>
        </div>
        <div className="">
          <div className=" ">
            <img src="https://via.placeholder.com/300x300" alt="Placeholder" />
          </div>
        </div>
        <button className="button is-primary is-outlined has-text-black is-rounded " >Review Recipe</button>
      </div> */
  );
};


export default DrinkList;
