import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../src/screens/Home'
import DetailsScreen from '../src/screens/DetailsScreen'
import Privacy from '../src/screens/Privacy'
// setting up the navigation and routes

const AuthNavigator = createStackNavigator(
    {
      Home: { screen: Home },
      DetailsScreen: { screen: DetailsScreen },
      Privacy: { screen: Privacy },
    },
    {
      headerMode: 'none'
    }
  );

  export default createAppContainer(AuthNavigator);

