import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Loader from '../image/loader.gif';
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={Loader} style={{width: '100%', height: '100%'}} />
      </View>
    );
  }
}
