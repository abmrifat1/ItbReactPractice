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

class Drawer extends React.Component {
  static navigationOptions = ({navigation}) => {

    return{
    title:'Dashbord',
    headerStyle: {
      backgroundColor: '#075951',
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={()=>navigation.navigate("Drawer")}>
        <Text style={{color: '#FCFCFC', fontSize: 18, paddingRight: 20}}>
          Drawer++
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
         
          <Text>This is Dashbord page</Text>
         
          
        </SafeAreaView>
      </>
    );
  }
}

export default Drawer;