import React, {useState, useEffect, useContext} from 'react';
import {Restaurant} from '../../features/restaurants/components/restaurant-info-card.component';

import {locationRequest, locationTransform} from './location.service';

export interface ContextType {
  keyword: string;
  // search: string;
  isLoading: boolean;
  error: any;
  location: any;
  search: (text: string) => void;
}

const initialState: ContextType = {
  keyword: '',
  // search: '',
  isLoading: false,
  error: undefined,
  location: '',
  search: keyword => {},
};

export const LocationContext = React.createContext<ContextType>(initialState);

export const LocationContextProvider = ({children}: any) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState<{lat: any; lng: any}>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const {isLoading, } = useContext(LocationContext);
  const appState = useContext<ContextType>(LocationContext);

  useEffect(() => {}, [appState.keyword]);

  const onSearch = async (searchKeyword: any) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      // don't do anything
      return;
    }
    try {
      const resp: any = await locationRequest(searchKeyword.toLowerCase());
      const transformed = locationTransform(resp);
      setLocation(transformed);
    } catch (error) {
      setError(error as any);
    }
    setIsLoading(false);
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
