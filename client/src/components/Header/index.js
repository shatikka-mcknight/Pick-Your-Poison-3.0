import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="hero is-primary">
      <div className="hero-body">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="" to="/">
          <h1 className="title has-text-centered is-size-1 pb-3">Pick Your Poison</h1>
        </Link>
        <p className="subtitle has-text-centered">Let us pick your perfect cocktail.</p>
      </div>
        <div className="center">
          {Auth.loggedIn() ? (
            <>
               <Link className="button is-primary is-rounded city-button m-2" to="/Login-SignUp">
                Dashboard
                </Link>
                
                <Link className="button is-primary is-rounded city-button m-2" to="/Login-SignUp">
                Favorites
              </Link>
              <Link className="button is-primary is-rounded city-button m-2" to="/Login-SignUp">
                History
                </Link>
              <Link className="button is-primary is-rounded city-button m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="button is-primary is-rounded city-button m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
              <>
                <div className="navbarCenter" >
                  <Link className="button is-primary is-rounded city-button m-2" to="/">
                Home
                  </Link>
              <Link className="button is-primary is-rounded city-button m-2" to="/Login-SignUp">
                Login
                </Link>
                <Link className="button is-primary is-rounded city-button m-2" to="/Login-SignUp">
                Sign-Up
                  </Link>
                  
                </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;