import React from 'react';
import DrinkSelection from '../components/DrinkSelection';

const SingleDrinkList = () => {
    return (<main>
        <div className="flex-row justify-center">
          <div className=" mb-3 p-3">
            <DrinkSelection />
          </div>
        </div>
    </main>
)};

export default SingleDrinkList;