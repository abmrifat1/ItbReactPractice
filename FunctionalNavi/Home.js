//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {counter: 0};
  }
  componentDidCatch() {
    console.log('componentdidcatch');
  }
  componentDidMount() {
    console.log('componentDidmount');
  }
  componentDidUpdate() {
    console.log('componentdidupdate');
  }
  componentWillMount() {
    console.log('componentwillmount');
  }
  componentWillReceiveProps() {
    console.log('componentdidrecieveprops');
  }
  componentWillUnmount() {
    console.log('componentwillunmount');
  }
  componentWillUpdate() {
    console.log('componentwillupdate');
  }
  shouldComponentUpdate() {
    if (this.state.counter === 2) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> {this.state.counter}</Text>
        <Button
          title="count"
          onPress={() => this.setState({counter: this.state.counter + 1})}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
