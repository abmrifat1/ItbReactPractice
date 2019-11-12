import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';

const NewScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> New</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  New: {
    screen: NewScreen,
  },
});

export default createAppContainer(AppNavigator);
