import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import {NavigationEvents, createStackNavigator} from 'react-navigation';

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
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      let drinks = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text
              style={styles.text}
              // onPress={() => NavigationEvents('Description', {name: name})}
            >
              {val.strDrink}
            </Text>
            <Text>       </Text>
            <Image style={styles.image} source={{uri: val.strDrinkThumb}} />
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
/**
 * <Text
              style={styles.text}
              onPress={() => NavigationEvents('Description', {name: name})}
              >
              {val.name}
            </Text>
            <Text>       </Text>
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
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderWidth: 1,
    backgroundColor: '#91bbc8',
  },
  image: {
    width: 100,
    height: 100,
    //resizeMode: 'contain',
    //borderTopLeftRadius: 1000,
  },
});
