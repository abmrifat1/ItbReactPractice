//import liraries
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// create a component
const Btn = props => {
  return (
    <TouchableOpacity>
      <Text {...props} style={{...styles.btn, ...props.style}}>
        Submit
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  btn: {
    fontSize: 20,
    padding: 10,
    borderRadius: 20,
  },
});

//make this component available to the app
export default Btn;
