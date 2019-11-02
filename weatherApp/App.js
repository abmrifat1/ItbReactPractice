/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';
import axios from 'axios';
import {MAIN_URL} from './src/api/mainpath';
import MainBg from './src/image/bg.jpg';

const App = () => {
  const [currentTemp, setTemp] = useState(null);
  const [iconpic, setIcon] = useState(null);

  var date = moment()
    .utcOffset('+06:00')
    .format(' hh:mm:ss a');

  // var time = time.toLocaleString('en-US', {hour: 'numeric', hour12: true});

  const getTempInfo = async () => {
    const apiInfo = await axios.get(
      MAIN_URL +
        'data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
    );
    const weatherData = await apiInfo.data;
    const pic = weatherData.weather[0].icon;
    if (currentTemp === null) {
      setTemp(weatherData);
      setIcon(pic);
    }
  };

  useEffect(() => {
    getTempInfo();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          source={MainBg}
          style={{width: '100%', height: '100%'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 4}}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: 30,
                  paddingTop: 10,
                }}>
                {currentTemp !== null ? currentTemp.name : ''}
              </Text>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  color: 'white',
                }}>
                {date}
              </Text>
            </View>

            <View
              style={{justifyContent: 'flex-end', flex: 1, paddingLeft: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${iconpic}.png`,
                  }}
                />
                <Text style={{color: 'white', fontSize: 20, marginTop: 8}}>
                  {currentTemp !== null ? currentTemp.weather[0].main : ''}
                </Text>
              </View>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Text style={{marginTop: 5, paddingRight: 5}}>
                  <Icon name="long-arrow-up" color="white" size={16}></Icon>
                </Text>

                <Text style={{color: 'white', fontSize: 20}}>
                  {currentTemp !== null
                    ? (currentTemp.main.temp_max - 273).toFixed(1) + '°'
                    : ''}
                </Text>
               

                <Text style={{marginTop: 6, paddingRight: 5, paddingLeft: 10}}>
                  <Icon name="long-arrow-down" color="white" size={16}></Icon>
                </Text>
                <Text style={{color: 'white', fontSize: 20}}>
                  {currentTemp !== null
                    ? (currentTemp.main.temp_min - 273).toFixed(1) + '°'
                    : ''}
                </Text>
              </View>

              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Text style={{color: 'white', fontSize: 100}}>
                  {currentTemp !== null
                    ? (currentTemp.main.temp - 273).toFixed(1) + '°'
                    : ''}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

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
