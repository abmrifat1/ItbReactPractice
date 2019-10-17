/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Button,Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainBg from '../img/main-bg.jpg';
import logo from '../img/logo.png';

class Login extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Text style={{color: '#FCFCFC', fontSize: 25, paddingLeft: '5%'}}>
            Title
          </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#E8383B',
      },
      headerTintColor: '#fff',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Text style={{color: '#FCFCFC', fontSize: 18, paddingRight: 20}}>
            See More
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
       
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex:1}}>
          
            <ImageBackground source={MainBg} style={styles.bodyBg}>
              <ScrollView>
              <View style={styles.mainDiv}>
              <View style={{flex:1}}>
                <Image source={logo} style={styles.logo} />
                </View>
              <View style={{flex:2,marginTop: 10,}}>

                <TextInput
                  placeholder="Username"
                  underlineColorAndroid="#111212"
                  style={styles.inputBox}></TextInput>
                <TextInput
                  placeholder="Password"
                  underlineColorAndroid="#111212"
                  style={styles.inputBox}></TextInput>
                
                <View style={styles.btn}>
                 <Button
                  title="Sign In" color="#7D162E"
                  // onPress={() => Alert.alert('Left button pressed')}
                />
                </View>
                </View>

                <Text style={styles.footer}>
                  Forgot your password? Click here to reset.
                </Text>
              
              </View>
              </ScrollView>
            </ImageBackground>
            
          </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  bodyBg: {
    width: '100%',
    height: '100%',
    flex:1,
  },
  mainDiv: {
    height: '78%',
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    marginTop:'33%',
  },
  inputBox: {
    paddingRight: '70%',
    margin:'3%',
  },
  logo:{
    marginTop:12,
   height:'110%',
   width:'85%',
   paddingRight: '90%',
   padding:'5%',
   marginBottom: 30,
  backgroundColor:"#EFEDF2",
 // marginBottom: 10,
  },
  footer: {
    paddingBottom:25,
    fontSize: 13,
    marginLeft:'-15%',
  },
  btn:{
    marginTop:'6%',
    marginBottom:'2%',
    backgroundColor: '#7D162E',
    justifyContent:'flex-start',
    marginRight:'65%',
    marginLeft:'4%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  }
});

export default Login;
