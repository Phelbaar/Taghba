import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {isTemplateElement} from '@babel/types';

export default class Description extends React.Component {
  static navigationOption = {
    title: 'Welcome home buddy',
  };
  /*
  renderItem = data => (
    <TouchableOpacity>
      <Text>{beer.name}</Text>
      <Text>{beer.desription}</Text>
      <Image
        source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 400, height: 400}}
      />
    </TouchableOpacity>
  );
*/
  render() {
    return (
      <View>
        <Text>blablab</Text>
      </View>
    );
  }
}

/*renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.name}</Text>
<Text style={styles.lightText}>{data.item.email}</Text>
<Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
*/
