import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {PaperProvider, ActivityIndicator, MD2Colors} from 'react-native-paper';
import {
  Restaurant,
  RestaurantInfoCard,
} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/safe-area.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Search} from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const rest: Restaurant = {
  name: 'Awesome Restaurant',
};
export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  //console.log('@@@@@@@@@@@@@@@@@@@@@@ doidhfoihdfio ', restaurants);

  return (
    <PaperProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.blue300} />
          </LoadingContainer>
        )}
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({item}: any) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item: any) => item.id}
        />
      </SafeArea>
    </PaperProvider>
  );
};

{
  /* <FlatList
          data={restaurantContext.restaurants}
          renderItem={() => <RestaurantInfoCard restaurant={rest} />}
          keyExtractor={item => item.name}
          contentContainerStyle={{padding: 16, marginTop: 16}}
        /> */
}
