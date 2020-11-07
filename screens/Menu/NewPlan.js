import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Animated,
  ImageBackground
} from 'react-native';
import Moment from 'moment';
import { GuideMark } from 'react-native-guide-mark';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../Search/SearchScreen';

const NewPlan = (props, { navigation, route }) => {
  const startValue = new Animated.Value(0);
  const startTwo = new Animated.Value(0);
  const startThree = new Animated.Value(0);
  const startFour = new Animated.Value(0);
  const [visible, setVisible] = React.useState(true);


  sendWeek = (startDay, endDay) => {
    props.sendWeek(startDay, endDay)

  }


  useEffect(() => {
    Animated.timing(startValue, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start();
    Animated.timing(startTwo, {
      toValue: 1,
      duration: 5600,
      useNativeDriver: false,
    }).start();
    // code to run on component mount
  }, []);

  return (
    <ImageBackground source={require('../../assets/icons/4541.jpg') }style={styles.image}>
    <View style={{ flex: 1}}>
      <GuideMark
        buttonTitle="Suivant"
        title="Step 1"
        description="Il faut choisir une semaine pour commencer"
        visible={visible}
        onButtonPress={() => setVisible(false)}
        top={50}
        left={20}

        markSize={300}
      />
      <Animated.View
        style={{
          opacity: startValue,
          flex: 1,
          alignSelf: 'center',
        }}>

        <Text
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: 35,
            alignItems: 'center',
            alignSelf: 'center',
            margin: 30,
          }}>
          Choisir une semaine
        </Text>

        <TouchableOpacity style={styles.box} onPress={() => {
 
          sendWeek(Moment().startOf('isoWeek').format('MM/DD/YYYY'), Moment().startOf('isoWeek').add(6, 'days').format('MM/DD/YYYY'))
        }

        }>
          <Image
            source={{
              uri:
                'https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png',
            }}
            style={{ width: 50, height: 50 }}
          />
          <View style={{ marginRight: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                fontStyle: 'italic',
                margin: 10,
              }}> 
               Le {Moment().startOf('isoWeek').format('DD MMMM')} à  {Moment().startOf('isoWeek').add(6, 'days').format('DD MMMM')}
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => {
          
           sendWeek(Moment().startOf('isoWeek').add(7, 'days').format('MM/DD/YYYY'), Moment().startOf('isoWeek').add(6 + 7, 'days').format('MM/DD/YYYY'))
 
         }

        }>
          <Image
            source={{
              uri:
                'https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png',
            }}
            style={{ width: 50, height: 50 }}
          />
          <View style={{ marginRight: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                fontStyle: 'italic',
                margin: 10,
              }}>
              Le {Moment().startOf('isoWeek').add(7, 'days').format('DD MMMM')} à {Moment().startOf('isoWeek').add(6 + 7, 'days').format('DD MMMM')}
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => {
           sendWeek(Moment().startOf('isoWeek').add(14, 'days').format('MM/DD/YYYY'), Moment().startOf('isoWeek').add(6 + 14, 'days').format('MM/DD/YYYY'))
 
        }

        }>
          <Image
            source={{
              uri:
                'https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png',
            }}
            style={{ width: 50, height: 50 }}
          />
          <View style={{ marginRight: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                fontStyle: 'italic',
                margin: 10,
              }}>
            Le {Moment().startOf('isoWeek').add(14, 'days').format('DD MMMM')} à {Moment().startOf('isoWeek').add(6 + 14, 'days').format('DD MMMM')}
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => {
           
          sendWeek(Moment().startOf('isoWeek').add(21, 'days').format('MM/DD/YYYY'), Moment().startOf('isoWeek').add(6 + 21, 'days').format('MM/DD/YYYY'))

        }

        }>
          <Image
            source={{
              uri:
                'https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png',
            }}
            style={{ width: 50, height: 50 }}
          />
          <View style={{ marginRight: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                fontStyle: 'italic',
                margin: 10,
              }}>
              Le {Moment().startOf('isoWeek').add(21, 'days').format('DD MMMM')} à {Moment().startOf('isoWeek').add(6 + 21, 'days').format('DD MMMM')}
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>

      </Animated.View>
    </View>
    </ImageBackground>
  );
};

export default NewPlan;

const styles = StyleSheet.create({
  box: {
    paddingTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 80,
    margin: 5,
    // borderColor:"green",
    // borderWidth:1.5,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    marginVertical: 15,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
},

});
