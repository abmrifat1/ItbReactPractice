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
      result: 0,
      operator: '',
      arrayOfNumber: [''],
      arrayOfOperator: [''],
      value: '',
    };
  }
  handleClick = number => {
    let {result, arrayOfNumber} = this.state;
    if (result !== 0) {
      arrayOfNumber = '' + result + number;
      result = '' + result + number;
      this.setState({result: result});
      this.setState({arrayOfNumber: '' + arrayOfNumber});
    } else {
      result = '' + number;
      this.setState({result: +result});
    }
  };
  handlePointClick = point => {
    let {result} = this.state;
    if (result === 0 || result === '') {
      result = '' + result + point;
      this.setState({result: result});
    } else if (result !== 0) {
      let splitResult = result;
      splitResult = '' + splitResult;
      splitResult = splitResult.split('');
      var length = splitResult.length - 1;
      if (splitResult[length] === '.') {
        this.setState({result: result});
      } else {
        result = '' + result + point;
        this.setState({result: result});
      }
    } else {
      result = '' + result + point;
      this.setState({result: +result});
    }
  };
  handleOperation = operatorSign => {
    let {result, arrayOfOperator, arrayOfNumber, newArray} = this.state;
    if (result === 0 || result === '') {
      this.setState({result: result});
    } else if (result !== 0) {
      let splitResult = result;
      splitResult = '' + splitResult;
      splitResult = splitResult.split('');

      var length = splitResult.length - 1;
      if (
        splitResult[length] === '+' ||
        splitResult[length] === '-' ||
        splitResult[length] === 'x' ||
        splitResult[length] === '÷'
      ) {
        this.setState({result: result});
      } else {
        this.setState({operator: operatorSign});
        result = '' + result + operatorSign;
        arrayOfOperator = '' + arrayOfOperator + operatorSign;
        this.setState({arrayOfOperator: '' + arrayOfOperator});
        this.setState({result: result});
      }
    } else {
      this.setState({operator: operatorSign});
      result = '' + result + operatorSign;
      this.setState({result: +result});
    }
  };
  handleEqualBtnClick = () => {
    let {result, arrayOfNumber, arrayOfOperator} = this.state;
    arrayOfNumber = '' + arrayOfNumber;
    arrayOfNumber = arrayOfNumber.split('+');
    //  arrayOfNumber = arrayOfNumber.split('-');
    //  arrayOfNumber = arrayOfNumber.split('x');
    //  arrayOfNumber = arrayOfNumber.split('÷');
    //  arrayOfOperator = arrayOfOperator.split('');
    let length = arrayOfOperator.length;
    let newResult;
    for (var i = 0; i < length; i++) {
      if (result !== 0 && arrayOfOperator[i] === '+') {
        arrayOfNumber[i + 1] =
          parseFloat(arrayOfNumber[i]) + parseFloat(arrayOfNumber[i + 1]);
        newResult = arrayOfNumber[i + 1];
        // this.setState({result: arrayOfNumber[i + 1]});
      }

      if (result !== 0 && arrayOfOperator[i] === '-') {
        arrayOfNumber[i + 1] =
          parseFloat(arrayOfNumber[i]) - parseFloat(arrayOfNumber[i + 1]);
        newResult = arrayOfNumber[i + 1];
      }
      if (result !== 0 && arrayOfOperator[i] === '÷') {
        arrayOfNumber[i + 1] = arrayOfNumber[i] / arrayOfNumber[i + 1];
      }
      if (result !== 0 && arrayOfOperator[i] === 'x') {
        arrayOfNumber[i + 1] =
          parseFloat(arrayOfNumber[i]) * parseFloat(arrayOfNumber[i + 1]);
        newResult = arrayOfNumber[i + 1];
      }
      this.setState({result: '' + newResult});
    }
    arrayOfNumber = [''];
    this.setState({arrayOfNumber: '' + arrayOfNumber});
    arrayOfOperator = '';
    this.setState({arrayOfOperator: '' + arrayOfOperator});
  };
  handleEqualClick = () => {
    let {result, operator, arrayOfNumber, arrayOfOperator} = this.state;
    if (result !== 0 && operator === '+') {
      let newResult = 0;
      result = result.split('+');
      for (let i = 0; i < result.length; i++) {
        newResult += parseFloat(result[i]);
      }
      newResult = '' + newResult;
      this.setState({result: newResult});
    } else if (result !== 0 && operator === '-') {
      let newResult = 0;
      result = result.split('-');
      for (let i = 0; i < result.length; i++) {
        if (i === 0) {
          newResult = result[i];
          result[i] = 0;
        }
        newResult = '' + newResult;
        newResult = newResult - parseFloat(result[i]);
      }
      newResult = '' + newResult;
      this.setState({result: newResult});
    } else if (result !== 0 && operator === 'x') {
      let newResult = 1;
      result = result.split('x');
      for (let i = 0; i < result.length; i++) {
        newResult *= parseFloat(result[i]);
      }
      newResult = '' + newResult;
      this.setState({result: newResult});
    } else if (result !== 0 && operator === '÷') {
      let newResult;
      result = result.split('÷');
      for (let i = 0; i < result.length; i++) {
        if (i === 0) {
          newResult = result[i];
          result[i] = 1;
        }
        newResult = newResult / parseFloat(result[i]);
      }
      newResult = '' + newResult;
      this.setState({result: newResult});
    } else {
      this.setState({result: result});
    }
    arrayOfNumber = [''];
    this.setState({arrayOfNumber: '' + arrayOfNumber});
    arrayOfOperator = '';
    this.setState({arrayOfOperator: '' + arrayOfOperator});
  };

  handleDeleteClick = () => {
    let {result} = this.state;
    if (result !== 0 && typeof result === 'string') {
      var num = this.state.result;
      var newResult = num.slice(0, num.length - 1);
      this.setState({result: newResult});
    } else {
      newResult = 0;
      this.setState({result: newResult});
    }
  };
  render() {
    const {result, arrayOfOperator, arrayOfNumber} = this.state;
    return (
      <>
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.mainContent}>
            <View style={styles.screenContent}>
              <Text style={styles.screenText}>{result}</Text>
              <Text style={styles.screenText}>{arrayOfNumber}</Text>
              <Text style={styles.screenText}>{arrayOfOperator}</Text>
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
                  onPress={() => this.handlePointClick('.')}
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
                  // onPress={() => {
                  //   this.handleEqualClick();
                  // }}
                  onPress={() => {
                    this.handleEqualBtnClick();
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
  item: {
    fontSize: 35,
    color: '#706C6C',
    fontWeight: '700',
    paddingLeft: 15,
    paddingRight: 15,
  },
  operatorItem: {
    fontSize: 25,
    marginTop: 15,
    color: '#940C5B',
    fontWeight: '700',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
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
