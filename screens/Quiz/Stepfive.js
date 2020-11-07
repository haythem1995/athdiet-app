import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AppStyles } from '../../AppStyles';


export default function StepFive({ menu, menuType }) {
  const [value, setValue] = React.useState(menu);

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.textStyle}>
        Menu ?
            </Text>
      <RadioButton.Group onValueChange={
        value => {
          setValue(value)
          menuType(value)
        }
      }
        value={value}>
        <View
          style={styles.container2}>
          <TouchableOpacity style={styles.container1} onPress={() => setValue("Athlète")}>
            <Text style={{ fontWeight: 'bold' }}>Athlète</Text>
            <RadioButton value="Athlète" />
          </TouchableOpacity>
        </View>
        <View
          style={styles.container2}>
          <TouchableOpacity style={styles.container1} onPress={() => setValue("Keto")}>
            <Text style={{ fontWeight: 'bold' }}>Keto</Text>
            <RadioButton value="Keto" />
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
  container1: {
    flexDirection: "row",
    alignItems: "center",
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
    padding: 8,

  },
});
