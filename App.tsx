import React from 'react';
import {Text} from 'react-native';
import {PaperProvider, Searchbar} from 'react-native-paper';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {SafeArea} from './src/components/safe-area.component';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'settings-outline',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({route}: {route: any}) => {
  const iconName = (TAB_ICON as any)[route.name as string];
  return {
    tabBarIcon: ({size, color}: {size: number; color: string}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'green',
    tabBarStyle: [
      {
        display: 'flex',
      },
      null,
    ],
  };
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <PaperProvider>
              <NavigationContainer>
                <Tab.Navigator
                  screenOptions={{
                    // tabBarIcon: ({size, color}: {size: number; color: string}) => (
                    //   <Ionicons name={iconName} size={size} color={color} />
                    // ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'green',
                    tabBarStyle: [
                      {
                        display: 'flex',
                      },
                      null,
                    ],
                  }}>
                  <Tab.Screen
                    name="Restaurants"
                    component={RestaurantsScreen}
                  />
                  <Tab.Screen name="Map" component={Map} />
                  <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                      tabBarIcon: ({color, size}) => {
                        const iconName = (TAB_ICON as any)['Settings'];
                        return (
                          <Ionicons name={iconName} size={size} color={color} />
                        );
                      },
                    }}
                  />
                </Tab.Navigator>
              </NavigationContainer>
            </PaperProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
