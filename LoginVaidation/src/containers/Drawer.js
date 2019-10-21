


import React from 'react';
import { SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,Image} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';

import InputC from '../components/Button'
import BtnC from '../components/Input'
import menuPic from '../img/menu.jpg'
import backbtn from '../img/back.png'


class MyNotificationsScreen extends React.Component {
 
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,backgroundColor:"#4D8F6F"}}>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashbord')}>
        <Image source={backbtn} style={{width:30,height:30,}}/>
      </TouchableOpacity>
     
       {/* <Text style={{fontSize:20,color:"white"}}>My Notifications</Text> */}
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
        <Image source={menuPic} style={{width:35,height:35,}}/>
      </TouchableOpacity>
      
       
       </View>
       <View>
      <Text style={{padding:20}}>This is my notifications</Text>
      </View>
   
    </View>
     
    );
  }
}
class Compon extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Custom Component',
  };

  render() {
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,backgroundColor:"#4D8F6F"}}>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashbord')}>
        <Image source={backbtn} style={{width:30,height:30,}}/>
      </TouchableOpacity>
     
       {/* <Text style={{fontSize:20,color:"white"}}>My Notifications</Text> */}
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
        <Image source={menuPic} style={{width:35,height:35,}}/>
      </TouchableOpacity>
      
       
       </View>
       <View>
      <Text style={{padding:20}}>This is my all component</Text>
    </View>
   
    </View>
    
    );
  }
}



const MyDrawerNavigator = createDrawerNavigator({
  
  
  Notifications: {
    screen: MyNotificationsScreen,
   
  },

  compon:{
    screen:Compon,
   
  }, 
 
  })

  const Dashboard = createDrawerNavigator({
    MyDrawerNavigator: {
      screen: MyDrawerNavigator
    },
    
  },  {
    //headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'red'},
      title: 'Back!',
      headerTintColor: 'white',
    })
  } )

const styles = StyleSheet.create({
  bodyBg: {
    width: '100%',
    height: '150%',
    flex: 1,
  },
 
  btnC: {
    marginTop: '6%',
    marginBottom: '2%',
    backgroundColor: '#7D162E',
    justifyContent: 'flex-start',
    marginRight: '70%',
    marginLeft: '3%',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
  },

  inputC: {
    marginTop: '6%',
    marginBottom: '2%',
    backgroundColor: '#7D162E',
    justifyContent: 'flex-start',
    marginRight: '70%',
    marginLeft: '3%',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
  },
});

export default Dashboard;