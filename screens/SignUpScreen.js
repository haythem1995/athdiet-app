import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import { AppStyles } from '../AppStyles';
import Button from 'react-native-button';
import axios from '../Utils/api';
import Svg, { Path } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var validator = require('email-validator');


export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adresse: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      loading: false,
      lastName: '',
      birthday: '',
      gender: '',
      quiz_id: '',
      passwordError: '',
      emailError: '',
      nameError: '',
      lastNameError: '',
      diet: '',
      town: '',
      country: '',
      postCode: 0,
      phoneNumber: 0,
      subscription_type: '',
      photo: '',
      photo_av_ap: '',
      poids: 0,
      poidsCible: 0,
      taille: 0,
      keyyActiviteSportive: 0,
      vegetarien: false,
      menu: '',
    };
    this.animatedHeight = new Animated.Value(150);
    this.spinValue = new Animated.Value(0);
  }
  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  componentDidMount() {
    this.spin();

    Animated.timing(this.animatedHeight, {
      toValue: -20,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }


  createUser = () => {

    if (this.state.firstName === '') {
      this.setState({ nameError: "S'il vous plaît entrer votre nom" })
    }
    if (this.state.lastName === '') {
      this.setState({ lastNameError: "S'il vous plaît entrer votre prenom" })
    }

    if (this.state.password === '') {
      this.setState({ passwordError: "S'il vous plaît entrer votre Mot de passe" })
    }
    if (this.state.email === '') {
      this.setState({ emailError: "S'il vous plaît entrer votre email" })
    }




    if (
      this.state.emailError === '' &&
      this.state.firstName !== '' &&
      this.state.passwordError === '' &&
      this.state.lastNameError === '' &&
      this.state.nameError === ''
    ) {
      this.setState({ loading: true })
      let user = {
        firstName: this.state.firstName,
        password: this.state.password,
        email: this.state.email,
        lastName: this.state.lastName,
      };
      this.props.navigation.navigate('Quiz', {
        user: user,
      });
    }
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <KeyboardAwareScrollView style={{backgroundColor: "white"}}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              height: 100,
              backgroundColor: 'transparent',
              alignSelf: 'center',
              borderRadius: 60,
              top: -40,
              elevation: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
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
                transform: [{ rotate: spin }],
              }}
            />
          </View>
          <Svg
            height="250"
            width="320%"
            viewBox="0 0 1500 420"
            style={{ position: 'absolute', top: 0 }}>
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
                placeholder="Prénom"
                onChangeText={(text) => {
                  let Name = /^[A-Za-z\s]+$/;
                  if (!text.match(Name)) {
                    this.setState({ nameError: 'Nom non valide' });
                  } else {
                    this.setState({ nameError: '' });
                  }

                  this.setState({ firstName: text })
                }}
                value={this.state.firstName}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
            {this.state.nameError !== '' ? (
            <View style={{ flex: 1, flexDirection: 'row' , marginLeft: 50}}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'red' }}>{this.state.nameError}</Text>
          </View>
        </View>
        ) : null}

            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Nom"
                onChangeText={(text) => {
                  let Name = /^[A-Za-z\s]+$/;
                  if (!text.match(Name)) {
                    this.setState({ lastNameError: 'Prenom  non valide' });
                  } else {
                    this.setState({ lastNameError: '' });
                  }
                  this.setState({ lastName: text })
                }}
                value={this.state.lastName}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
            {this.state.lastNameError !== '' ? (
            <View style={{ flex: 1, flexDirection: 'row',  marginLeft: 50 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'red' }}>{this.state.lastNameError}</Text>
          </View>
        </View>
            ):null}
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="E-mail Addresse"
                onChangeText={(text) => {
                  if (!validator.validate(text)) {
                    this.setState({ emailError: 'Email non valide' });
                  } else {
                    this.setState({ emailError: '' });
                  }


                  this.setState({ email: text })
                }}
                value={this.state.email}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
            {this.state.email !== '' && !validator.validate(this.state.email) ? (
                <View style={{ flex: 1, flexDirection: 'row', marginLeft:50 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'red' }}>Email non valide</Text>
                  </View>
                </View>
              ) : null}
              {this.state.email === '' && this.state.emailError !== '' ? (
                <View style={{ flex: 1, flexDirection: 'row', marginLeft:50 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'red' }}>{this.state.emailError}</Text>
                  </View>
                </View>
              ) : null}
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({ password: text, passwordError: '' })
                }}
                value={this.state.password}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
            {this.state.passwordError !== '' && this.state.password === '' ? (
                <View style={{ flex: 1, flexDirection: 'row', marginLeft:50 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'red' }}>{this.state.passwordError}</Text>
                  </View>
                </View>
              ) : null}
            <Button
              containerStyle={[styles.ButtonContainer, { marginTop: 50 }]}
              style={styles.facebookText}
              onPress={(e) => this.createUser(e)}>
              Créer un compte
          </Button>
            <TouchableOpacity
              style={{ marginTop: 8 }}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>
                Vous avez déjà un compte ? ?{' '}
                <Text
                  style={{
                    marginTop: 8,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#8CBD3E',
                  }}>
                  Se connecter
              </Text>
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: 'white',
    alignItems: 'center',
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
  ButtonContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.primary,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});
