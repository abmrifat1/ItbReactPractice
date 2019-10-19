import React from 'react';
import { SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Button,Image} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MainBg from '../img/main-bg.jpg';
import logo from '../img/logo.png';
import Input from '../components/Input';
import Btn from '../components/Button';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Drawer Menu"
      />
      <Text>This is Home page</Text>
      </View>
      
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View>
         <Button
      onPress={() => this.props.navigation.openDrawer()}
      title="Drawer Menu"
    />
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      </View>
     
    );
  }
}
class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Login',
  };

  render() {
    return (
      <View>
        <Input
          style={styles.inputCustom}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Btn style={styles.btnCustom} />

        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

class ProjectScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Project',
  };

  render() {
    return (
      <>
      <View>
      
        
          {/* <ImageBackground source={MainBg} style={styles.bodyBg}> */}
            <ScrollView>
            <View style={styles.mainDiv}>
            <View style={{flex:1}}>
              <Image source={logo} style={styles.logo} />
              </View>
            <View style={{flex:2,marginTop: 10,}}>

              <TextInput
                placeholder="Username"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
              <TextInput
                placeholder="Password"
                underlineColorAndroid="#111212"
                style={styles.inputBox}></TextInput>
              
              <View style={styles.btn}>
               <Button
                title="Sign In" color="#7D162E"
                // onPress={() => Alert.alert('Left button pressed')}
              />
              </View>
              </View>

              <Text style={styles.footer}>
                Forgot your password? Click here to reset.
              </Text>
            
            </View>
            </ScrollView>
          {/* </ImageBackground> */}
        
   

        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  inputCustom: {
    height: 50,
    backgroundColor: '#DDDD',
  },
  btnCustom: {
    margin: 20,
    backgroundColor: '#ef94e2',
    textAlign: 'center',
  },
 bodyBg: {
    width: '100%',
    height: '100%',
    flex:1,
  },
  mainDiv: {
    height: '78%',
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    marginTop:'33%',
  },
  inputBox: {
    paddingRight: '70%',
    margin:'3%',
  },
  logo:{
    marginTop:12,
   height:'110%',
   width:'85%',
   paddingRight: '90%',
   padding:'5%',
   marginBottom: 30,
  backgroundColor:"#EFEDF2",
 // marginBottom: 10,
  },
  footer: {
    paddingBottom:25,
    fontSize: 13,
    marginLeft:'-15%',
  },
  btn:{
    marginTop:'6%',
    marginBottom:'2%',
    backgroundColor: '#7D162E',
    justifyContent:'flex-start',
    marginRight:'65%',
    marginLeft:'4%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  }
});


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Homepage: {
    screen: ProjectScreen,
  },
});

const Dashbord = createAppContainer(MyDrawerNavigator);
export default Dashbord;