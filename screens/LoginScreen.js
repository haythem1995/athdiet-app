import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Easing,Image, Animated} from 'react-native';
import {GoogleSigninButton} from 'react-native-google-signin';
import Button from 'react-native-button';
import {AppStyles} from '../AppStyles';
import axios from '../Utils/api';
import AsyncStorage from '@react-native-community/async-storage';
import Svg, {Path} from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {   Overlay } from 'react-native-elements';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import Spinner from './Components/Spinner'
var validator = require('email-validator');


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      idUser: '',
      loading:false,
      passwordError:'',
      emailError:''
    };
    this.animatedHeight = new Animated.Value(150);
    this.spinValue = new Animated.Value(0)
  }
  spin = () =>{
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,

      }
    ).start()
  }
  componentDidMount() {
    this.spin()


    Animated.timing(this.animatedHeight, {
      toValue: -20,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }
  onPressLogin = () => {


    const {idUser, email, password} = this.state;
    if (password === '') {
      this.setState({passwordError:"S'il vous plaît entrer votre Mot de passe"});
    }
      if (email === '') {
      this.setState({emailError:"S'il vous plaît entrer votre email"});
    }
 
      if (validator.validate(email) && password !== '') {


    
    // this.setState({loading:true})
 
 
  axios
  .post('/users/login', {
    password: password,
    email: email,
  })
  .then((res) => {
       this.setState({loading:false})

      AsyncStorage.setItem('idUser', res.data.user._id).then((response) => {
         this.props.navigation.navigate('Acceuil');
      });
   }).catch(error=>  
    showMessage({
      message: "Email ou mot de passe incorrect ",
      type: "danger",
    })      // this.setState({loading:false})
   )
   

 }
  };

  render() {
     const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
      <Overlay isVisible={this.state.loading} fullScreen={true} overlayStyle={{justifyContent:"center",alignSelf:"center",backgroundColor:"transaparent",borderColor:"red"}} >
 
        <Spinner />
 
      </Overlay>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            height: 100,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            borderRadius: 60,
            top: -30,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}>
         <Animated.Image
            source={{
              uri:
                'data:image/png;base64,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',
            }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 25,
              marginVertical: 10,
              transform: [{rotate: spin}]
            }}
          />
        </View>
        <Svg
          height="250"
          width="320%"
          viewBox="0 0 1500 420"
          style={{position: 'absolute', top: 0}}>
          <Path
            fill="#8CBD3E"
            fill-opacity="1000"
            d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,176C672,213,768,235,864,250.7C960,267,1056,277,1152,261.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
            marginTop: this.animatedHeight,
          }}>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="E-mail"
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
              {this.state.email !== '' && !validator.validate(this.state.email) ? (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'red' }}>Email non valide</Text>
                </View>
              </View>
            ) : null}
            {this.state.email === '' && this.state.emailError !== '' ? (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'red' }}>{this.state.emailError}</Text>
                </View>
              </View>
            ) : null}

          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              secureTextEntry={true}
              placeholder="Mot de passe"
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
                   {this.state.passwordError !== '' && this.state.password === '' ? (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'red' }}>{this.state.passwordError}</Text>
                </View>
              </View>
            ) : null}

          </View>
          <Button
            containerStyle={styles.loginContainer}
            style={styles.loginText}
            onPress={() => this.onPressLogin()}>
            Connexion
          </Button>
          <TouchableOpacity style={{marginTop: 8}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#8CBD3E',
              }}>
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>
              Vous n'avez pas un compte ?{' '}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: '#8CBD3E',
                }}>
                S'inscrire
              </Text>
            </Text>
          </TouchableOpacity>

          <View>
            <Button
              containerStyle={styles.facebookContainer}
              style={styles.facebookText}>
              <MaterialCommunityIcons name="facebook" color="white" size={40} />
              Connexion avec Facebook
            </Button>
            <Button
              containerStyle={styles.googleContainerC}
              style={styles.facebookText}>
              <MaterialCommunityIcons name="google" color="white" size={40} />
              Connexion avec Google
            </Button>
          </View>
        </Animated.View>
        <FlashMessage position="top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  or: {
    fontFamily: AppStyles.fontName.main,
    color: 'black',
    marginTop: 40,
    fontSize: 16,
    marginBottom: 10,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.main,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.main,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.primary,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  googleContainerC: {
    borderRadius: 20,
    backgroundColor: '#EA4335',
    padding: 7,
    marginTop: 30,
  },
  facebookContainer: {
    borderRadius: 20,
    backgroundColor: AppStyles.color.facebook,
    padding: 7,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: AppStyles.buttonWidth.main,
    height: 50,
    marginTop: 16,
    padding: 10,
    borderRadius: 10,
  },
  googleText: {
    color: AppStyles.color.white,
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.primary,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.main,
  },
  
});
