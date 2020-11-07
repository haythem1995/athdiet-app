import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView, ImageBackground, View } from "react-native";
import Moment from 'moment';


export default function weeksPlan({ navigation }) {

  return (
    // <ScrollView style={styles.content}>
    <ImageBackground source={require('../../assets/keto3.jpg')} style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>{Moment().startOf('isoWeek').format('DD')}-{Moment().endOf('isoWeek').format('DD')}</Text>
          <Text style={styles.appButtonText}>{Moment().format('MMMM')}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
          
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => { navigation.navigate('Plan') }}
        >
          <Text style={styles.appButtonText}>Week</Text>
          <Text style={styles.appButtonText}>7</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </ImageBackground>


  );
}
const styles = StyleSheet.create({
  content: {
    // backgroundColor: "#ffffff",
    marginTop: 80,
    flex: 2
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgba(76, 175, 80, 0.5)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#81B522",
    margin: 10,

  },
  appButtonText: {
    fontSize: 18,
    // color: "#81B522",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    width: '100%',
    height: '100%',

    resizeMode: "cover",
    justifyContent: "center"

  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
