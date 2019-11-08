import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import Taghba from './Taghba';
import Description from './Description';

const MainNavigator = createStackNavigator({
  Home: {screen: Taghba},
  Description: {screen: Description},
});

const App = createAppContainer(MainNavigator);

export default App;
