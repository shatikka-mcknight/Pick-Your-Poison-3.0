import React from 'react';
import DrinkSelection from '../components/DrinkSelection';
import { useLocation } from 'react-router';

const SingleDrink = () => {
  const location = useLocation()
  const { drink } = location.state

  return (
    <main>
        <div className="flex-row justify-center">
          <div className=" mb-3 p-3">
           <DrinkSelection drink={drink} />
          </div>
        </div>
    </main>
)};

export default SingleDrink;