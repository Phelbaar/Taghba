/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';

export default class Taghba extends React.Component {
  static navigationOption = {
    title: 'Welcome home buddy',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }


  componentDidMount() {
    //type GET request
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') // https://swapi.co/api/planets/
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.drinks,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    } else {
      let drinks = this.state.dataSource.map((val, key) => {
        return (
          <View style={styles.item} key={key}>
            <Text style={styles.text}>{val.strDrink}</Text>
            <TouchableHighlight
              onPress={() =>
                navigate('Details')
              }>
              <Image style={styles.image} source={{uri: val.strDrinkThumb}} />
            </TouchableHighlight>
          </View>
        );
      });

      return (
        <View style={styles.container}>
          <ScrollView>{drinks}</ScrollView>
        </View>
      );
    }
  }
}

 /*        <View key={key} style={styles.item}>
            <Text style={styles.text}>{val.strDrink}</Text>
            <Image
              style={styles.image}
              source={{uri: val.strDrinkThumb}}
              //onPress={() => NavigationEvents('Description', {name: name})}
            />
          </View>
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'lucida grande',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderWidth: 1,
    backgroundColor: '#91bbc8',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    //resizeMode: 'contain',
    //borderTopLeftRadius: 1000,
  },
});

