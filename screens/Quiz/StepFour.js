import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AppStyles } from '../../AppStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function StepFour({ vegeterienEtat, vegeterien }) {
  const [value, setValue] = React.useState(vegeterienEtat);

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.textStyle}>
        Êtes-vous végétarien ?
            </Text>
      <RadioButton.Group onValueChange={
        value => {
          setValue(value)
          vegeterien(value)
        }}
        value={value}>
        <View style={styles.container2}>
        <TouchableOpacity style={styles.container1} onPress={()=>setValue("Oui")} >
          <Text>Oui</Text>
          <RadioButton value="Oui" />
        </TouchableOpacity>
        </View>
        <View
          style={styles.container2}>
        <TouchableOpacity style={styles.container1} onPress={()=>setValue("Non")} >
          <Text>Non</Text>
          <RadioButton value="Non" />
        </TouchableOpacity>
        </View>
      </RadioButton.Group>
    </View>

  );

}
const styles = StyleSheet.create({

  container: {
    alignItems: "center"
  },
  textStyle: {
    fontWeight: "bold",
    margin: 16
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: AppStyles.color.primary,
    borderRadius: 16,
    width: "80%",
    justifyContent: "space-between"

  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
    padding: 8,
    width: "80%",

  },




});
