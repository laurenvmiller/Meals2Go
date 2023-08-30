import {mocks, mockImages} from './mock';
import camelize from 'camelize-ts';
import uuid from 'react-native-uuid';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map((restaurant: any) => {
    // restaurant.photos = restaurant.photos.map(p => {
    //   return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    // });

    return {
      // ...restaurant,
      id: uuid.v4().toString(),
      photos: restaurant.photos.map(p => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
