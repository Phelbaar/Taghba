import React from 'react';
import {
    ScrollView,
    Text,
    ActivityIndicator,
    TouchableHighlight,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native';

import bgImage from './background.jpg';

export default class RandomCocktail extends React.Component {

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
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return (
                <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </ImageBackground>
            );
        } else {
            let drinks = this.state.dataSource.map((val, key) => {
                return (
                    <ImageBackground style={{ width: '100%', height: 540, alignItems: 'center' }} key={key}>
                        <Text style={styles.title}>YOUR COCKTAIL</Text>

                        <Text style={styles.name}>{val.strDrink}</Text>
                        <Image style={styles.image} source={{ uri: val.strDrinkThumb }} />
                        <ScrollView style={{ width: 200, height: 'auto', top: 10, }}>
                            <Text style={styles.cont}>{val.strInstructions}</Text>
                        </ScrollView>

                    </ImageBackground>
                );
            });

            return (
                <ImageBackground source={bgImage} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                    <ScrollView>{drinks}</ScrollView>
                    {/* <TouchableHighlight
                        onPress={() =>
                            navigate('Details')}>
                        <Text style={styles.note}>pull to refresh</Text>
                        </TouchableHighlight> */}
                </ImageBackground>
            );
        }
    }
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 180,
        height: 180,
        borderRadius: 20,
    },
    title: {
        height: 'auto',
        color: '#FBCF3F',
        fontFamily: 'arial',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 60,
        textShadowRadius: 6,
        fontWeight: 'bold',
        textShadowColor: '#EA4E2F',
        textDecorationLine: 'underline',
    },
    name: {
        height: 'auto',
        color: '#ED4F3D',
        fontFamily: 'arial',
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 10,
        textShadowRadius: 6,
        fontWeight: 'bold',
        textShadowColor: '#EA4E2F',
    },
    cont: {
        width: 200,
        fontSize: 16,
        textAlign: 'justify',
        height: 'auto',
    },
    note: {
        width: 200,
        fontSize: 15,
        textAlign: 'center',
        color: '#A0AD87',
        top: -10,
    },


});