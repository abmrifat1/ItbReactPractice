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
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.mainContent}>
            <View style={styles.screenContent}>
              <Text style={styles.screenText}>37373476</Text>
            </View>
            <View style={styles.buttonContent}>
              <View style={styles.btnColumn}>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnColumn}>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>0</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnColumn}>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.item}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.deleteItem}>DEL</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnOparetion}>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.operationItem}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.operationItem}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.operationItem}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.operationItem}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleBtn}>
                  <Text style={styles.operationEqualItem}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  mainContent: {flex: 1},
  screenContent: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#D4D2D2',
    borderBottomWidth: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContent: {
    flex: 4,
    ackgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: '5%',
  },
  btnColumn: {justifyContent: 'space-around', flex: 1},
  btnOparetion: {justifyContent: 'space-around', flex: 1},
  singleBtn: {alignSelf: 'center'},
  item: {fontSize: 35, color: '#706C6C', fontWeight: '700'},
  operationItem: {
    fontSize: 25,
    marginTop: 15,
    color: '#706C6C',
    fontWeight: '700',
  },
  operationEqualItem: {
    fontSize: 25,
    marginBottom: 10,
    backgroundColor: '#31BDC4',
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  deleteItem: {fontSize: 35, color: '#31BDC4'},
  screenText: {fontSize: 35, color: '#31BDC4', fontWeight: '700'},
});

export default App;
