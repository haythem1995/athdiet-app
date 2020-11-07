import React, { Component } from 'react';
import WelcomeScreen from '../screens/WelcomeScreen'
import { Text, View } from 'react-native'
import { AppStyles } from "../AppStyles";

export default class WelcomeComponent extends Component {
  render() {
    return (
        <View>
    <WelcomeScreen/>
    </View>

    );
  }
}
