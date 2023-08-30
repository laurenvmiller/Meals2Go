import React, {useState, createContext, useEffect, useMemo} from 'react';

import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

interface ContextType {
  restaurants: any[];
  isLoading: boolean;
  error: any;
}

const initialState: ContextType = {
  restaurants: [],
  isLoading: false,
  error: undefined,
};

export const RestaurantsContext = createContext(initialState);

export const RestaurantsContextProvider = ({children}: any) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const data: any = await restaurantsRequest();
        const transformed = restaurantsTransform(data);
        setRestaurants(transformed);
      }, 2000);
    } catch (error) {
      setError(error as any);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
