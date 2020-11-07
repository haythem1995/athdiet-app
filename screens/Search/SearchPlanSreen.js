import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlanSearchScreen from './PlanSearchScreen';

const Stack = createStackNavigator();
export default function SearchPlanSreen() {
    return (
   
        <Stack.Navigator>
          <Stack.Screen name="Search" component={PlanSearchScreen} />
        </Stack.Navigator>
    
    );
  }