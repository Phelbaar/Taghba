/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Taghba from './Taghba';
import DetailScreen from './Description';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Taghba,
      navigationOptions:{
          title: 'Home'
        }
      },
    Details: {screen: DetailScreen},
  },
  {initialRouteName: 'Home'},
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}