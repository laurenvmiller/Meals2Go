import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {LocationContext} from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.body};
`;

export const Search = () => {
  // const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [searchKeyword, setSearchKeyword] = useState('');

  const {search} = useContext(LocationContext);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
          console.log('text ', text);
        }}
      />
    </SearchContainer>
  );
};
