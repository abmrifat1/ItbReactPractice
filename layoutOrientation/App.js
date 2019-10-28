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
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from './components/Card';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait',
    };
  }
  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }
  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({orientation: 'portrait'});
      } else {
        this.setState({orientation: 'landscape'});
      }
    }
  };

  render() {
    const {orientation} = this.state;
    console.log(orientation);
    const displayText = (
      <Text
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          fontSize: 50,
        }}>
        {orientation}
      </Text>
    );
    return (
      <>
        <StatusBar barStyle="dark-content" ref="rootView" />
        <SafeAreaView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <Card>
              <TextInput
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  margin: 10,
                }}
              />
              {displayText}
            </Card>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </>
    );
  }
}

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
