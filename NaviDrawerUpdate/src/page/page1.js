//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text, BackHandler} from 'react-native';
// import all basic components

export default class Screen1 extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // this.props.navigation.navigate('Screen2');
      return true;
    });
  }
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Screen 1 </Text>
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
