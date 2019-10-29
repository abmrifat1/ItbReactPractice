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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import {BASE_URL} from './src/utils/contants';

const App: () => React$Node = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const getWeatherData = async () => {
    const response = await axios.get(
      BASE_URL +
        'data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
    );
    const weatherData = await response.data;
    if (currentWeather === null) {
      setCurrentWeather(weatherData);
    }
  };

  useEffect(() => {
    getWeatherData();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text
          style={{fontSize: 50, justifyContent: 'center', alignSelf: 'center'}}>
          {currentWeather !== null ? currentWeather.name : ''}
        </Text>
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
