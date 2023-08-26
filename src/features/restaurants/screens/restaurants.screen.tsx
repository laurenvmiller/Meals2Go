import React from 'react';
import {FlatList} from 'react-native';
import {PaperProvider, Searchbar} from 'react-native-paper';
import {
  Restaurant,
  RestaurantInfoCard,
} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/safe-area.component';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

// const [searchQuery, setSearchQuery] = React.useState('');
const rest: Restaurant = {
  name: 'Awesome Restaurant',
};
export const RestaurantsScreen = () => (
  <PaperProvider>
    <SafeArea>
      <SearchContainer>{/* <Searchbar /> */}</SearchContainer>
      <FlatList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
          {name: 9},
          {name: 10},
          {name: 11},
          {name: 12},
          {name: 13},
          {name: 14},
        ]}
        renderItem={() => <RestaurantInfoCard restaurant={rest} />}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16, marginTop: 16}}
      />
    </SafeArea>
  </PaperProvider>
);
