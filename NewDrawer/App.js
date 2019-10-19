import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Input from './components/Input';
import Btn from './components/Button';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Notification"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Login',
  };

  render() {
    return (
      <View>
        <Input
          style={styles.inputCustom}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Btn style={styles.btnCustom} />

        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  inputCustom: {
    height: 50,
    backgroundColor: '#DDDD',
  },
  btnCustom: {
    margin: 20,
    backgroundColor: '#ef94e2',
    textAlign: 'center',
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;
