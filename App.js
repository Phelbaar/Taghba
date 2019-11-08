import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import Taghba from './Taghba';

const MainNavigator = createStackNavigator({
  Home: Taghba,
  //Description: {screen: DescriptionScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
/*
class DescriptionScreen extends React.Component{
  render(){
    const
  }
}
*/
