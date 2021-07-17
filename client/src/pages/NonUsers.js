import React from 'react';
import DrinkList from '../components/DrinkList';
import SearchDrinks from '../components/SearchDrinks';
// import DrinkResults from '../components/DrinkResults';

const NonUsers = () => {
    return (
        <main>
      <div className="flex-row justify-center">
        <div className="mb-3 p-3">
          <SearchDrinks />
        </div>
      </div>
      {/* <div className="flex-row justify-center">
        <div className="mb-3 p-3">
          <DrinkResults />
        </div>
      </div> */}
      <div className="flex-row justify-center">
        <div className="mb-3 p-3">
          <DrinkList />
        </div>
      </div>
      
  </main>
    
    )};

export default NonUsers;