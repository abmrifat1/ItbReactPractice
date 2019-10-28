//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Card = props => {
  return <View style={styles.container}>{props.children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    elevation: 8,
    margin: 10,
  },
});

//make this component available to the app
export default Card;
