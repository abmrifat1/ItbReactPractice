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
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameValue: 'sample',
      passwordValue: '1234',
      numberValue: 1,
    };
  }
  onIncrementBtnPress = () => {
    let {numberValue} = this.state;

    if (numberValue >= 10) {
      Alert.alert('Warning!', 'number cannot be more then 10', [
        {text: 'ok', style: 'default', onPress: () => {}},
        {
          text: 'reset',
          style: 'cancel',
          onPress: () => {
            this.setState({numberValue: 1});
          },
        },
      ]);
    } else {
      let newNumber = numberValue + 1;
      this.setState({numberValue: newNumber});
    }
  };
  onDecrementBtnPress = () => {
    let {numberValue} = this.state;

    if (numberValue <= 1) {
      Alert.alert('Warning!', 'Number can not be less than 1', [
        {
          text: 'ok',
          style: 'default',
          onPress: () => {},
        },
        {
          text: 'cancel',
          style: 'cancel',
          onPress: () => {},
        },
      ]);
    } else {
      let newNumber = numberValue - 1;
      this.setState({numberValue: newNumber});
    }
  };

  onSubmitButtonPress = () => {
    const {
      username,
      usernameValue,
      password,
      passwordValue,
      number,
    } = this.state;
    if (username === usernameValue && password === passwordValue) {
      alert('Login success');
    }
  };
  render() {
    const {username, password, numberValue} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View>
              <TextInput
                placeholder="name"
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  margin: 20,
                }}
                value={username}
                onChangeText={usernameText => {
                  this.setState({username: usernameText});
                }}
              />
              <TextInput
                placeholder="Password"
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  margin: 20,
                }}
                value={password}
                onChangeText={passwordText => {
                  this.setState({password: passwordText});
                }}
              />
              <Button title="submit" onPress={this.onSubmitButtonPress} />
              <View
                style={{
                  margin: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Button title="-" onPress={this.onDecrementBtnPress} />
                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                  }}>
                  {numberValue}
                </Text>
                <Button title="+" onPress={this.onIncrementBtnPress} />
              </View>
              <Text style={{fontSize: 30, fontFamily: 'SFUIDisplay-Bold'}}>
                this is react native
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
