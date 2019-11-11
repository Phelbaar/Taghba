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
                <Text style={styles.cont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut mattis nulla a tellus ultrices, eget vulputate tellus consequat. 
                Fusce gravida sapien vel urna pharetra, a dapibus quam pellentesque.
                Morbi finibus porttitor pulvinar. 
                Integer commodo sollicitudin lectus, pellentesque eleifend nulla fringilla a. 
                Aliquam quis nisl nec magna ultricies congue at ut ante.
                Etiam dolor magna, fermentum non dictum eu, rhoncus quis ante. 
                Sed scelerisque eget magna vitae molestie.</Text>
            </ImageBackground >


        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
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
    cont:{
        width: 200,
        fontSize: 14,
        textAlign: 'justify',
        top: 20,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
        //resizeMode: 'contain',
        //borderTopLeftRadius: 1000,
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
    content: {
        color: '#fff',
        fontFamily: 'arial',
        fontSize: 30,
    },

});

