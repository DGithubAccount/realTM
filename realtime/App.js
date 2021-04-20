import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './Splash';
import Login from './Login';

const App = createStackNavigator({
  Splash: {screen: Splash},
  Login: {screen: Login},
});

export default createAppContainer(App);
