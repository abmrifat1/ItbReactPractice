import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal} from 'react-native';

export default class ModalEx extends React.Component {
  state = {
    isVisible: false, //state of modal default false
  };
  render() {
    const modal = (
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={this.state.isVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        {/*All views of Modal*/}
        <View style={styles.modal}>
          <Text style={styles.text}>Modal is open!</Text>
          <Button
            title="Click To Close Modal"
            onPress={() => {
              this.setState({isVisible: !this.state.isVisible});
            }}
          />
        </View>
      </Modal>
    );
    const btn = (
      <Button
        title="Click To Open Modal"
        onPress={() => {
          this.setState({isVisible: true});
        }}
      />
    );
    return (
      <View style={styles.container}>
        {this.state.isVisible === true ? modal : btn}
        <Text>hhh</Text>

        {/*Button will change state to true and view will re-render*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
