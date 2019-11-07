import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default class Taghba extends React.Component {
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
            <Text style={styles.text}>{val.name}</Text>
          </View>
        );
      });

      return (
        <View style={styles.container}>
          <ScrollView>{beer}</ScrollView>
        </View>
      ); /*<ScrollView>
      {name}
    </ScrollView>*/
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
