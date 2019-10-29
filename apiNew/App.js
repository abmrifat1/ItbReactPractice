/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
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
import {BASE_URL} from './src/api/contants';

const App: () => React$Node = () => {
  const [currentDring, setDring] = useState(null);

  const getDrink = async () => {
    const response = await axios.get(
      BASE_URL + 'api/json/v1/1/list.php?c=list',
    );
    const drinkData = await response.data.drinks[2];
    console.log(response.data.drinks[2].strCategory);
    if (currentDring === null) {
      setDring(drinkData);
    }
  };
  useEffect(() => {
    getDrink();
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{currentDring !== null ? currentDring.strCategory : ''}</Text>
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
