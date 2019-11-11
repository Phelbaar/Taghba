import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Alert,
  BackHandler,
} from 'react-native';

import bgImage from './background.jpg';

export default class Taghba extends React.Component {
  static navigationOption = {
    title: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={bgImage} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        <Text style={styles.title}>Welcome to Get My Random Cocktail !</Text>
        <Text style={styles.content}></Text>

        <TouchableHighlight style={styles.button_help}
          onPress={() =>
            Alert.alert('Click on "Random Cocktail" to get your Random Cocktail ~ !')}>
          <Text style={styles.button_cont}>Help</Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.button_get}
          onPress={() =>
            navigate('Details')}>
          <Text style={styles.button_cont}>Random Cocktail</Text>
        </TouchableHighlight >


        <TouchableHighlight style={styles.button_info}
          onPress={() =>
            navigate('Infos')}>
          <Text style={styles.button_cont}>Infos</Text>
        </TouchableHighlight >


        <TouchableHighlight style={styles.button_exit}
          onPress={() =>
            BackHandler.exitApp()}>
          <Text style={styles.button_cont}>Exit</Text>
        </TouchableHighlight >
      </ImageBackground >


    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 'auto',
    color: '#FBCF3F',
    fontFamily: 'arial',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 100,
    textShadowRadius: 6,
    fontWeight: 'bold',
    textShadowColor: '#EA4E2F',
  },
  content: {
    color: '#fff',
    fontFamily: 'arial',
    fontSize: 30,
  },
  button_help: {
    width: 220,
    backgroundColor: '#ED4F3D',
    height: 'auto',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
  },
  button_get: {
    width: 220,
    backgroundColor: '#F9C323',
    height: 'auto',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    top: 20,
  },
  button_info: {
    width: 220,
    backgroundColor: '#A0AD87',
    height: 'auto',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    top: 40,
  },
  button_exit: {
    width: 220,
    backgroundColor: '#9e9e9e',
    height: 'auto',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    top: 60,
  },
  button_cont: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
  }

});

