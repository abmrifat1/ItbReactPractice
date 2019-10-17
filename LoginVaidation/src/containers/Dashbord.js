/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Dashbord extends React.Component {
  static navigationOptions = ({navigation}) => {

    return{
    title: 'Protfolio',
    headerStyle: {
      backgroundColor: '#450938',
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={{color: '#FCFCFC', fontSize: 18, paddingRight: 20}}>
          DashBord
        </Text>
      </TouchableOpacity>
    ),
  }};

  render() {
    const{navigation}=this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         
          <Text>This is me!!</Text>
         
          
        </SafeAreaView>
      </>
    );
  }
}

export default Dashbord;
