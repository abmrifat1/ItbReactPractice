/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/containers/Login';
import Navi from './src/containers/Navi';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Navi: {
    screen: Navi,
  },
});

export default createAppContainer(AppNavigator);
