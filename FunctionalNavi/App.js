import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import NewScreen from './Modal';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  New: {
    screen: NewScreen,
  },
});

export default createAppContainer(AppNavigator);
