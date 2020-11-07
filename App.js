/* import * as React from 'react';
import TabNavigator from '../mobileapp/Navigations/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import Quiz from './screens/Quiz/Quiz'

const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}) {  
  React.useEffect(() => {
  SplashScreen.hide();}, [])
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
:      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="SignUp" component={SignUpScreen} />
      <HomeStack.Screen name="Quiz" component={Quiz} />  
      <HomeStack.Screen name="Acceuil" component={TabNavigator} navigation={navigation}  />

    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
   
    </NavigationContainer>
  );
}

*/

import * as React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './screens/redux/store';

import TabNavigator from '../mobileapp/Navigations/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/LoginScreen';
import FlashMessage from "react-native-flash-message";

import SignUpScreen from './screens/SignUpScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
import Quiz from './screens/Quiz/Quiz';

/* const actions = [
  {
    text: "Dinner",
     name: "Dinner",
    position: 1,
    color:"#8CBD3E",
    icon:<Image
    source={require('./assets/soup.png')}
    style={{ width: 50, height: 50,borderRadius:20 }}
    
  />
  },
  {
    text: "Snack1",
     name: "Snack1",
    position: 2,
    color:"#8CBD3E",
    icon:<Image
    source={require('./assets/fruits.png')}
    style={{ width: 50, height: 50,borderRadius:20 }}
    
  />
  },
  {
    text: "Lunch",
     name: "Lunch",
    position: 3,
    color:"#8CBD3E",
    icon:<Image
    source={require('./assets/lunch.png')}
    style={{ width: 50, height: 50,borderRadius:20 }}
    
  />
  },
  {
    text: "Petit-déjeuner",
   name: "Petit-déjeuner",
    position: 4,
    color:"#8CBD3E",
    icon:<Image
    source={require('./assets/omelette.png')}
    style={{ width: 50, height: 50,borderRadius:20 }}
    
  />
  },
  // {
  //     text: "Video",
  //    name: "bt_videocam",
  //     position: 4,
  //     color:"#8CBD3E"
  //   }
];
*/

//   <FloatingAction

//           color={'#8CBD3E'}
//           actions={actions}
//           onPressItem={name => {
//           console.log(`selected button: ${name}`);
//  }}
//  />
const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="SignUp" component={SignUpScreen} />
      <HomeStack.Screen name="Quiz" component={Quiz} /> */}

      <HomeStack.Screen
        name="Acceuil"
        component={TabNavigator}
        navigation={navigation}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
      <FlashMessage position="top" />

    </Provider>
  );
}
