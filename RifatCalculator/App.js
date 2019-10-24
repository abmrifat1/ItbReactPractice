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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
      operator: '',
    };
  }
  handleClick = number => {
    let {result} = this.state;
    var num = result + number;
    this.setState({result: num});
  };
  handleEqualClick = () => {
    let {result} = this.state;
    this.setState({result: result});
  };

  handleOperation = operaTor => {
    let {result, operator} = this.state;

    if (result !== 0) {
      this.setState({operator: operaTor});
      result = '' + result + operator;
      this.setState({result: result});
    } else {
      this.setState({operator: operaTor});
      result = '' + result + operaTor;
      this.setState({result: +result});
    }
  };

  handleDeleteClick = () => {
    var num = this.state.result;
    var newResult = num.slice(0, num.length - 1);
    this.setState({result: newResult});
  };
  render() {
    const {result} = this.state;
    return (
      <>
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.mainContent}>
            <View style={styles.screenContent}>
              <Text style={styles.screenText}>{result}</Text>
            </View>
            <View style={styles.buttonContent}>
              <View style={styles.btnColumn}>
                <TouchableOpacity
                  onPress={() => this.handleClick('7')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('4')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('1')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('.')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnColumn}>
                <TouchableOpacity
                  onPress={() => this.handleClick('8')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('5')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('2')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('0')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>0</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnColumn}>
                <TouchableOpacity
                  onPress={() => this.handleClick('9')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('6')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleClick('3')}
                  style={styles.singleBtn}>
                  <Text style={styles.item}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.handleDeleteClick();
                  }}
                  style={styles.singleBtn}>
                  <Text style={styles.deleteItem}>DEL</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnOparetion}>
                <TouchableOpacity
                  onPress={() => this.handleOperation('÷')}
                  style={styles.singleBtn}>
                  <Text style={styles.operatorItem}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleOperation('x')}
                  style={styles.singleBtn}>
                  <Text style={styles.operatorItem}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleOperation('-')}
                  style={styles.singleBtn}>
                  <Text style={styles.operatorItem}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleOperation('+')}
                  style={styles.singleBtn}>
                  <Text style={styles.operatorItem}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.handleEqualClick();
                  }}
                  style={styles.singleBtn}>
                  <Text style={styles.equalItem}>=</Text>
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
  operatorItem: {
    fontSize: 25,
    marginTop: 15,
    color: '#706C6C',
    fontWeight: '700',
    padding: 10,
  },
  equalItem: {
    fontSize: 25,
    marginBottom: 15,
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
