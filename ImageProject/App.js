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
  Button,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNFetchBlob from 'rn-fetch-blob';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImgPath: '',
    };
  }
  saveImage() {
    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch('GET', 'http://www.example.com/file/example.zip', {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        this.setState({ImgPath: res.path()});
      });
  }
  showImage() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <Button onPress={this.saveImage.bind(this)} title=" Save Image " />
        </View>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: this.state.ImgPath,
          }}
        />
        <Text>{this.state.ImgPath}</Text>

        {/* <View style={{margin: 10}}>
          <Button
            onPress={this.showImage.bind(this, 'Function With Argument Text')}
            title=" Show Image "
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    margin: 10,
  },
});
