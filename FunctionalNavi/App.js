import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Screen</Text>
    </View>
  );
};
const NewScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> New</Text>
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Functional',
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('New')}>
      <Text>Click Here</Text>
    </TouchableOpacity>
  ),
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  New: {
    screen: NewScreen,
    // navigationOptions: {
    //   headerMode: 'none',
    //   header: null,
    // },
  },
});

export default createAppContainer(AppNavigator);
