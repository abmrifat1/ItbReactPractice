//import liraries
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// create a component
const Input = props => {
  return (
    <TextInput {...props} style={{...styles.inputStyle, ...props.style}} />
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});

//make this component available to the app
export default Input;
