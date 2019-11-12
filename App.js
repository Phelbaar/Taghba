/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Taghba from './Taghba';
import Infos from './Infos';
import RandomCocktail from './RandomCocktail';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Taghba,
      navigationOptions: {
        title: 'Get My Random Cocktail',
      },
    },
    Infos: {
      screen: Infos,
      navigationOptions: () => ({
        title: 'Informations',
      }),
    },
    Details: {
      screen: RandomCocktail,
      navigationOptions: () => ({
        title: 'Your Random Cocktail',
      }),
    },
  },
  { initialRouteName: 'Home' },
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
