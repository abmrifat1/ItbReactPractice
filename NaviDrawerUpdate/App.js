//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import all basic components

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './src/page/page1';
import Screen2 from './src/page/page2';
import Screen3 from './src/page/page3';
import NextPage from './src/page/Next';
import LoginPage from './src/page/Login';

import NavigationDrawerStructure from './src/component/NavigationDrawerStructure';

const LogOut = createStackNavigator(
  //All the screen from the Screen1 will be indexed here
  {
    LoginPg: {
      screen: LoginPage,
    },
  },
  {
    headerMode: 'none',
  },
);

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#093333',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#78000C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here

  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Next')}>
          <Text style={{padding: 10, color: 'white', fontSize: 25}}>Demo4</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#ff0000',
      },
      headerTintColor: '#fff',
    }),
  },
  Next: {
    screen: NextPage,
    navigationOptions: ({navigation}) => ({
      title: 'Demo 4',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('NextNaviPage')}>
          <Text style={{padding: 10, color: 'white', fontSize: 25}}>
            About Me
          </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#0B2147',
      },
      headerTintColor: '#fff',
    }),
  },

  NextNaviPage: {
    screen: NextPage,
    navigationOptions: ({navigation}) => ({
      title: 'About Me',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Third')}>
          <Text style={{padding: 10, color: 'white', fontSize: 25}}>
            1st page
          </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#400B39',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing

    Screen1: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    Screen3: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
    LogOut: {
      //Title
      screen: LogOut,
      navigationOptions: {
        drawerLabel: 'Logout',
      },
    },
  },
  {initialRouteName: 'LogOut'},
);

export default createAppContainer(DrawerNavigatorExample);
