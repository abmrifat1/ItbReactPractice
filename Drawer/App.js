import React from 'react';
import {StyleSheet,Button,View,Text,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:15,backgroundColor:"#206969"}}>
       
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
       <Text style={{fontSize:20,color:"white"}}>=</Text>
      </TouchableOpacity>
      
       <Text style={{fontSize:20,color:"white"}}>My App</Text>
       </View>
       <View>
      <Text style={{padding:20}}>This is Home page</Text>
    </View>
   
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
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:15,backgroundColor:"#206969"}}>
       
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
       <Text style={{fontSize:20,color:"white"}}>=</Text>
      </TouchableOpacity>
      
       <Text style={{fontSize:20,color:"white"}}>My App</Text>
       </View>
       <View>
      <Text style={{padding:20}}>This is Notifications page</Text>
    </View>
   
    </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
export default MyApp;