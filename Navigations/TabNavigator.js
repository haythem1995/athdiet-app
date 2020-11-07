import React from 'react';
// import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { AppStyles } from "../AppStyles";
import { ParametreStackNavigator,MainStackNavigator, ProfileStackNavigator,SearchStackNavigator,MenuStackNavigator } from "./StackNavigator";
// import TabNavigator from "./TabNavigator";
// import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
// import DrawerNavigator from '../Navigations/DrawerNavigator'

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (  
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconColor;
          
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
            iconColor = focused
              ? AppStyles.color.primary
              : AppStyles.color.gray
          } else if (route.name === 'Search') {
            iconName = focused
              ? 'search1'
              : 'search1';
            iconColor = focused
              ? AppStyles.color.primary
              : AppStyles.color.gray
          }
          else if (route.name === 'Plan') {
            iconName = focused
              ? 'food'
              : 'food';
            iconColor = focused
              ? AppStyles.color.primary
              : AppStyles.color.gray
          }
          else if (route.name === 'Pararmetre') {
            iconName = focused
              ? 'setting'
              : 'setting';
            iconColor = focused
              ? AppStyles.color.primary
              : AppStyles.color.gray
          }
          else if (route.name === 'Profile') {
            iconName = focused
              // ? 'account-circle-outline'
              // : 'account-circle-outline';
              ? 'home'
              : 'home';
            iconColor = focused
              ? AppStyles.color.primary
              : AppStyles.color.gray
          }
          if(route.name === 'Plan')
          return <MaterialCommunityIcons name={iconName} size={36} color={iconColor} />
            else 
            return <AntDesign name={iconName} size={36} color={iconColor} />

        },
      })}

      tabBarOptions={{
        showLabel: false, 
      }}
    >
     
      <Tab.Screen name="Profile" component={ProfileStackNavigator}   />
      <Tab.Screen name="Search" component={SearchStackNavigator}        />
      <Tab.Screen name="Plan" component={MenuStackNavigator}     />
    
      <Tab.Screen name="Pararmetre" component={ParametreStackNavigator}   />       

    
      </Tab.Navigator>
  )}