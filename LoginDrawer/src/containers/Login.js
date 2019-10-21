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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Login extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Login',
      headerStyle: {
        backgroundColor: '#FF45D5',
      },
      headerTintColor: '#fff',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Navi')}>
          <Text style={{color: '#FCFCFC', fontSize: 18, paddingRight: 20}}>
            Login Page
          </Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text>Contact with me</Text>
          </TouchableOpacity> */}
          <Text>This is Login page</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default Login;
