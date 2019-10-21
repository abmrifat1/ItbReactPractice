import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Item,
  FlatList,
  ImageBackground,
  HeaderButtons,
  Icon,
  Button,
  Image,
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

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
const Navi = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notification: {
    screen: MyNotificationsScreen,
  },
});

// const Dashbord = createDrawerNavigator(
//   {
//     DrawerLoad: {
//       screen: DrawerLoad,
//     },
//   },
//   {
//     navigationOptions: ({navigation}) => ({
//       title: 'Home',
//       headerStyle: {
//         backgroundColor: 'black',
//       },
//       headerTintColor: 'white',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }),
//   },
// );

export default Navi;
