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
  StatusBar,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import axios from 'axios';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right,
} from 'native-base';
import mainBg from './src/img/main-bg.jpg';
import logo from './src/img/logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screeHight: Dimensions.get('window').height,
      orientation: 'portrait',
      userName: '',
      password: '',
      message: '',
    };
  }

  submitFunction = async () => {
    let {userName, password, message} = this.state;
    const BaseUrl = 'http://test.sequenzainc.com';
    const parameters = {
      username: userName,
      password: password,
    };
    const headers = {headers: {Accept: 'application/json, text/plain, */*'}};
    const dataPost = await axios.post(
      BaseUrl + '/api/auth/login',
      parameters,
      headers,
    );
    if (dataPost) {
      this.setState({message: dataPost.status});
    }
  };

  render() {
    const portrait = (
      <Card style={styles.cardStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <CardItem>
            <Image source={logo} style={styles.logoBg} />
          </CardItem>

          <CardItem>
            <View style={styles.inputField}>
              <TextInput
                onChangeText={value => {
                  this.setState({userName: value});
                  console.log(userName);
                }}
                placeholder="Username"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
              <TextInput
                onChangeText={value => {
                  this.setState({password: value});
                  console.log(password);
                }}
                placeholder="Password"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.btn}>
              <Button
                title="Sign In"
                onPress={this.submitFunction}
                color="#7D162E"
              />
            </View>
          </CardItem>
          <Text style={styles.footer}>
            Forgot your password? Click here to reset.
          </Text>
        </ScrollView>
      </Card>
    );

    const landscape = (
      <Card style={styles.cardStyleL}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <CardItem>
            <Image source={logo} style={styles.logoBg} />
          </CardItem>

          <CardItem>
            <View style={styles.inputField}>
              <TextInput
                onChangeText={value => {
                  this.setState({userName: value});
                  console.log(userName);
                }}
                placeholder="Username"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
              <TextInput
                onChangeText={value => {
                  this.setState({password: value});
                  console.log(password);
                }}
                placeholder="Password"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.btn}>
              <Button
                title="Sign In"
                onPress={this.submitFunction}
                color="#7D162E"
              />
            </View>
          </CardItem>
          <Text style={styles.footer}>
            Forgot your password? Click here to reset.
          </Text>
        </ScrollView>
      </Card>
    );

    const {screeHight, orientation, userName, password, message} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" ref="rootView" />
        <SafeAreaView style={{flex: 1}}>
          <ImageBackground
            resizeMode="cover"
            source={require('./src/img/main-bg.jpg')}
            style={{
              height: screeHight,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flex: 1,
            }}>
            {orientation === 'portrait' ? portrait : landscape}
            <Text style={{color: 'green', fontSize: 30}}>{message}</Text>
          </ImageBackground>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: Colors.lighter,
    //marginHorizontal: 20,
  },
  cardStyle: {
    width: '90%',
  },
  cardStyleL: {
    width: '60%',
  },
  logoBg: {
    alignSelf: 'center',
    marginTop: 5,
    // marginLeft: 30,

    backgroundColor: '#EFEDF2',
    width: '100%',
    height: 90,
  },
  mainDiv: {flex: 1},
  inputBox: {margin: 3, paddingLeft: 3, width: '100%'},
  inputField: {
    flexDirection: 'column',
    width: '100%',
  },
  btn: {
    backgroundColor: '#7D162E',
    borderRadius: 10,
    marginLeft: 3,
  },
  footer: {
    paddingBottom: 45,
    fontSize: 15,
    marginLeft: 22,
  },
});

export default App;
