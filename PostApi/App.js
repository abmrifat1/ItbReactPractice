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
import axios from 'axios';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [employeer, setEmployeer] = useState(null);
  const BaseUrl = 'http://dummy.restapiexample.com/api/v1';
  const postApi = async () => {
    const parameters = {
      name: 'Khorshed Alam Rifat',
      salary: '60000',
      age: '24',
    };
    const headers = {headers: {'api-token': 'abmrifatHeader123454'}};
    const dataPost = await axios.post(BaseUrl + '/create', parameters, headers);
    // console.log(dataPost);
    return dataPost;
  };
  const getApi = async () => {
    const response = await axios.get(BaseUrl + '/employees');
    console.log(response);
    if (employeer == null) {
      setEmployeer(response);
    }
  };

  useEffect(() => {
    postApi();
    getApi();
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text
            style={{flexDirection: 'row', fontSize: 30, alignSelf: 'center'}}>
            {employeer !== null
              ? employeer.data[1550].employee_name +
                ', salery: ' +
                employeer.data[1550].employee_salary
              : 'no name'}
          </Text>
        </View>
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
