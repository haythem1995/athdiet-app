import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Picker } from 'react-native';
import { AppStyles } from '../../AppStyles';




export default class StepToo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const tailles = []
    for (let taille = 100; taille < 230; taille++) {
      tailles.push(taille+"")
    }
    const poids = []
    for (let poid = 40; poid < 200; poid++) {
      poids.push(poid+"")
    }
    const poidsC = []
    for (let index = 40; index < 200; index++) {
      poidsC.push(index+"")
    }
    return (
      <View style={{ flex: 18, alignItems: "center" }}>
        <Text
          style={styles.textStyle}>
          Métriques:
            </Text>
        <View key={1}
       style={styles.container}>
          <Text style={styles.containerText}>
            Taille (cm):
              </Text>
          <Picker
            style={styles.containerPicker}
            selectedValue={this.props.taille}
            onValueChange={(itemValue) => this.props.tailleUser(itemValue)}>
            {tailles.map((taille) =>
              <Picker.Item label={taille} value={taille} />)}
          </Picker>
        </View>
        <View         key={11}
 style={styles.container}>
          <Text style={styles.containerText}>
            Poids (kg):
              </Text>
          <Picker
            style={styles.containerPicker}
            selectedValue={this.props.poid}
            onValueChange={(itemV) => this.props.poidsUser(itemV)}>
            {poids.map((poid) =>
              <Picker.Item label={poid} value={poid} />)}
          </Picker>
        </View>
        <View         key={5}
 style={styles.container}>
          <Text style={styles.containerText}>
            Poids Cible (kg):
              </Text>
          <Picker
            style={styles.containerPicker}
            selectedValue={this.props.poidC}
            onValueChange={(itemValue) => this.props.poidsCUser(itemValue)}>
            {poidsC.map((poidC) =>
              <Picker.Item label={poidC} value={poidC} />)}
          </Picker>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderWidth: 2,
    borderColor: AppStyles.color.primary,
    borderRadius: 16,
    flex: 10,
    justifyContent: "space-between"
  },
  containerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    margin: 10,
    flex: 6,
  },
  containerPicker: {
    margin: 10,
    flex: 4,
  },
  ButtonContainer: {
    alignContent: "center",
    height: 50,
    width: '80%',
    borderWidth: 2,
    marginTop: 450,
    shadowColor: AppStyles.color.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 4,
    padding: 10,
    elevation: 4,
  },
  textStyle: {
    fontWeight: "bold",
    margin: 16,
  },

});

