import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
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
    return fetch('https://api.punkapi.com/v2/beers') // https://swapi.co/api/planets/
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
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
          <ActivityIndicator />
        </View>
      );
    } else {
      let beer = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text
              style={styles.text}
              onPress={() => NavigationEvents('DescriptionScreen')}>
              {val.name}
            </Text>
          </View>
        );
      });

      return (
        <View style={styles.container}>
          <ScrollView>{beer}</ScrollView>
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
    color: '#FFC31E',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderWidth: 1,
    backgroundColor: '#000',
  },
});
