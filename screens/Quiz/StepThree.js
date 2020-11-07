import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AppStyles } from '../../AppStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StepThree({ sportLevel, sportLev }) {
  const [value, setValue] = React.useState(sportLevel);

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.textStyle}>
        Pratiquez-vous une activité sportive :
            </Text>
      <RadioButton.Group onValueChange={
        value => {
          setValue(value)
          sportLev(value)
        }}
        value={value}

      >
        <View
          style={styles.container2}>
          <TouchableOpacity style={styles.container1} onPress={() => setValue("3 à 5 séances par semaine")} >
            <Text>3 à 5 séances par semaine</Text>
            <RadioButton value="3 à 5 séances par semaine" />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity style={styles.container1} onPress={() => setValue("1 à 2 séances par semaine")} >
          <Text>1 à 2 séances par semaine</Text>
          <RadioButton value="1 à 2 séances par semaine" />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity style={styles.container1} onPress={() => setValue("Oui, mais je suis débutant")}>
          <Text>Oui, mais je suis débutant.</Text>
          <RadioButton value="Oui, mais je suis débutant" />
          </TouchableOpacity>
        </View>
      </RadioButton.Group>
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
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
    marginLeft: 25 
    

  },

  textStyle: {
    fontWeight: "bold",
    margin: 16,
  },

});
