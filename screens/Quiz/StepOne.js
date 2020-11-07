import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableHighlight,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'
import { GuideMark } from 'react-native-guide-mark';


export default class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state={
      visible:true
    }
  }


  render() {
    return (
      <View
        style={styles.container}>
        <Text
          style={styles.textStyle}>
          Sélectionner votre sexe :
      </Text>
      <GuideMark
        buttonTitle="Suivant"
        title="Step 1"
        description="Sélectionner votre sexe"
        visible={this.state.visible}
        onButtonPress={() => this.setState({visible: false})}
        top={60}
        left={10}
        markSize={400}
      />
        <TouchableOpacity 
        key={1}
           onPress={()=>this.props.Shecked("homme")}
          >
          <View style={this.props.sexe == "homme" ? styles.ButtonContainer2 : styles.ButtonContainer}>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="face" size={40} color="#0DB3F5"></MaterialCommunityIcons>
            </View>
            <Text style={{ color: "#0DB3F5" }}>
              Homme
      </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
                key={5}

         onPress={()=>this.props.Shecked("femme")}>
          <View style={this.props.sexe == "femme" ? styles.ButtonContainer3 : styles.ButtonContainer}>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="face-woman" size={40} color="#ff3464"></MaterialCommunityIcons>
            </View>
            <Text style={{ color: "#ff3464" }}>
              Femme
      </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: '100%',
    borderWidth: 0,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 4,
  },
  ButtonContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: '100%',
    borderWidth: 2,
    margin: 10,
    borderRadius: 20,

     padding: 10,
    elevation: 2,
    borderColor: "#0DB3F5",
  },
  ButtonContainer3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: '100%',
    borderWidth: 2,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderColor: "#ff3464",
  },
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  textStyle: {
    fontWeight: "bold",
    margin: 16,
  },
  icons: {
    left: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white"
  },



});
