/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './components/NewCard';

class App extends React.Component {
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
    const myButton = (
      <Icon name="facebook" size={30} marginTop={30} color="blue"></Icon>
    );
    const displayText = (
      <View>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 50,
          }}>
          {orientation}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 50,
          }}>
          {myButton}
        </Text>
      </View>
    );
    const displayTextLarge = (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 50,
          }}>
          {myButton}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 50,
          }}>
          {orientation}
        </Text>
      </View>
    );
    return (
      <>
        <StatusBar barStyle="dark-content" ref="rootView" />
        <SafeAreaView>
          <ScrollView>
            {orientation === 'portrait' ? displayText : displayTextLarge}
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                margin: 10,
                padding: 20,
                backgroundColor: '#DDDD',
                width: '90%',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <Card>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'SFUIDisplay-Bold',
                  padding: 20,
                }}>
                {/* SFUIDisplay-Light */}
                react-native/Libraries/NewAppScreen
                react-native/Libraries/NewAppScreen
                react-native/Libraries/NewAppScreen
              </Text>
            </Card>
          </ScrollView>
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

export default App;
