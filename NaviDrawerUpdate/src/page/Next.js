//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, BackHandler} from 'react-native';
// import all basic components

export default class Nextpage extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Third');
      return true;
    });
 }
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Demo-4 Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
