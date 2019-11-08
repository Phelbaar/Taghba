/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Taghba from './Taghba';

export default class DetailScreen extends React.Component {
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
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    } else {
      let drinks = this.state.dataSource.map((val, key) => {
        return (
          <View style={styles.item}>
            <Text style={styles.text}>{val.strDrink}</Text>
          </View>
        );
      });

      return (
        <View style={styles.container}>
          <Text>{drinks}</Text>
        </View>
      );
    }
  }
}

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
/*renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.name}</Text>
<Text style={styles.lightText}>{data.item.email}</Text>
<Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
*/
