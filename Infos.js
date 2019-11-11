import React from 'react';
import {
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import bgImage from './background.jpg';

export default class Infos extends React.Component {
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
                <Text style={styles.title}>Information</Text>
                <Text style={styles.cont}>Hi, and welcome on 'Get my Random Cocktail'.
                Our application is using an API from thecocktaildb.com. It's an open, crowd-sourced database 
                of drinks and cocktails from around the world. You can now get your own random cocktail, just by pushing a button. 
                You will be able to read a short recipe of your cocktail. So... Enjoy !
                </Text>
            </ImageBackground >


        );

    }
}


const styles = StyleSheet.create({
      cont:{
        width: 200,
        fontSize: 16,
        textAlign: 'justify',
        top: 20,
    },
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

});

