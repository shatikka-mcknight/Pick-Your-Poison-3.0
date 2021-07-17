import React from 'react';
import { useQuery } from '@apollo/client';

import DrinkList from '../components/DrinkList';

import { QUERY_DRINKS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_DRINKS);
  const drinks = data?.drinks || [];

  return (
     <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DrinkList
              drinks={drinks}
              drinkTitle="nbxnx"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;