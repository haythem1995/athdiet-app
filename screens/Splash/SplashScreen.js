import React from 'react';
import { View, Image,Text, AsyncStorage, ImageBackground, StyleSheet } from 'react-native';

const logo_icon = require('../../assets/clock-keto-food.jpg');
class SplashScreen extends React.Component { 
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    )
  }
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();    
   
    if (data !== null ) {    
   await  this._retrieveData();     
    }    

  }
  _retrieveData = async () => {
    try {
      console.log("SignUpScreen",JSON.stringify(this.props))
       this.props.navigation.navigate('Login'); 
      // const value = await AsyncStorage.getItem('isconnected');
      // if (value !== null) {       
      //   this.props.navigation.navigate('StackScreen'); 
        
      // }
      // else{
      // this.props.navigation.navigate('FirstStep'); 
      // }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
      <View
      style={styles.container}
    >
      <ImageBackground
        source={logo_icon}
        style={styles.image}
      >
          <Text
            style={styles.paragraph}
          >
            AthDiet
          </Text>
      </ImageBackground>
    </View >
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor:"#000"
      },
      image: {
        flexGrow:1,
        height:null,
        width:null,
        alignItems: 'center',
        justifyContent:'center',
        opacity:0.5,

      },
      paragraph: {
        textAlign: 'center',
        fontSize:28,
        color:"#ffffff",     
      },
    });
export default SplashScreen;
