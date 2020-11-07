import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableHighlight,TouchableWithoutFeedback } from 'react-native';



// const image = {uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// };
// const image1 = {uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// };
 const  ketoimg= require('../assets/keto2.jpg');
 const  athleteimg= require('../assets/athlete2.jpg');
export default class FirstScreen extends Component {
  render() {
    return (
        <View style={{
            flex: 1
        }} >
        <TouchableWithoutFeedback                
         onPress={() =>{ this.props.navigation.navigate("Home")}}> 
            <View style={styles.box}>
                <ImageBackground
                source={ketoimg}
                style={{width: '100%', height: '100%'}}
                >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.Buttoncontainer}>
                    <Text style= {styles.userGreet}>Menu Athléte</Text>
                </View>
                </ImageBackground>
            </View> 
            </TouchableWithoutFeedback>
            <View style={styles.box}>
                <ImageBackground
                source={athleteimg}
                style={{width: '100%', height: '100%'}}
                >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.Buttoncontainer}>
                    <Text style= {styles.userGreet}>Programme Kéto</Text>
                </View>
                </ImageBackground>
            </View>
            {/* <View style={styles.boxx}>
                <ImageBackground
                source={image}
                style={{width: '100%', height: '100%'}}
                >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.Buttoncontainer}>
                    <Text style= {styles.userGreet}>Programme Kéto</Text>
                </View>
                </ImageBackground>
            </View> */}
        </View>

    );
  }
}

const styles = StyleSheet.create({
box:{
justifyContent:'space-between',
flexDirection:'row',
flex: 3,
height:"100%",
width:"100%",
backgroundColor:"white",
elevation:10,
shadowColor: '#000',
shadowOffset: { width: 0, height: 3 },
shadowOpacity: 0.5,
shadowRadius: 5,
},
boxx:{
    justifyContent:'space-between',
    flexDirection:'row',
    flex: 1,
    height:"100%",
    width:"100%",
    backgroundColor:"white",
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    },
    Buttoncontainer:{
        paddingTop: 100,
        paddingLeft: 200
    },
    DarkOverlay:{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: '100%',
        // backgroundColor: '#000',
        // opacity: 0.2,
        // borderRadius: 20
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black'
    },
    userText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#81B522'
    },
})
