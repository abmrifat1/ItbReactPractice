import React from 'react';
//import React

import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  // Modal,
} from 'react-native';
//import React Native Component

import Modal from 'react-native-modalbox';
//import Modal for different modal box

var screen = Dimensions.get('window');
//Screen Dimention for list width used below

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }

  onClose() {
    //called on modal closed
    console.log('Modal just closed');
  }

  onOpen() {
    //called on modal opened
    console.log('Modal just opened');
  }

  onClosingState(state) {
    //called on modal close/open of the swipe to close change
    console.log('Open/Close of the SwipeToClose just changed');
  }

  renderList() {
    //function to return List (To show on Modal)
    var list = [];
    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Item {i}
        </Text>,
      );
    }
    return list;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({isOpen: true})}>
          <Text style={styles.buttonText}>Open Modal</Text>
        </TouchableOpacity>

        <Modal
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}
          style={[styles.modal, styles.modal4]}
          position={'center'}>
          <Text style={styles.text}>Modal </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({isOpen: false})}>
            <Text style={styles.buttonText1}>close Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  modal2: {
    height: 230,
    width: 300,
    backgroundColor: 'orange',
  },
  modal3: {
    height: 300,
    width: 300,
  },
  modal4: {
    height: 300,
    width: 300,
  },
  text: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DDDD',
    width: 100,
    marginTop: 16,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'green',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
});
