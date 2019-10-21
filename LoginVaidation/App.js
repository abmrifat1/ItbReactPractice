/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./src/containers/Login";
import Drawer from "./src/containers/Drawer";
import Dashbord from "./src/containers/Dashbord";



const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  // Drawer: {
  //   screen: Drawer,
  // },
  Dashbord: {
    screen: Dashbord,
  },
  
  })


  ///<Route path="
const DrawerHeader=createSwitchNavigator({
  stack : AppNavigator,
  Drawer :Drawer

}, )
 
  /////" component={}/>
  export default createAppContainer(DrawerHeader);
