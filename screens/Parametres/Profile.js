import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Picker,
 } from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import InputSpinner from 'react-native-input-spinner';
import Slider from '@react-native-community/slider';
export default class HomeScreen extends React.Component {
  state = {
    country: 'uk',
    text: 130,
    age: 20,
  };

  render() {
    return (
      // <TabNavigator/>
      <View style={{backgroundColor: '#8CBD3E', flex: 1}}>
        <View style={{backgroundColor: 'white', flex: 0.43}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '10%',
              height: 60,
              paddingTop: '3%',
            }}>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Le sexe
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <DropDownPicker
                items={[
                  {
                    label: 'Homme',
                    value: 'uk',
                    icon: () => (
                      <MaterialIcon
                        name="gender-female"
                        size={18}
                        color="#900"
                      />
                    ),
                  },
                  {
                    label: 'Femme',
                    value: 'france',
                    icon: () => (
                      <MaterialIcon name="gender-male" size={18} color="#900" />
                    ),
                  },
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '10%',
              height: 60,
              paddingTop: '3%',
            }}>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                La taille
              </Text>
            </View>
            <View style={{flex: 0.7, flexDirection: 'row'}}>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={140}
                maximumValue={220}
                minimumTrackTintColor="green"
                maximumTrackTintColor="red"
                step={1}
                onValueChange={(text) => this.setState({text})}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                {this.state.text}(cm)
              </Text>

              {/* <Picker
            style={styles.containerPicker}
            selectedValue={this.props.poidC}
             >
            {taille.map((poidC) =>
              <Picker.Item label={poidC} value={poidC} key={poidC} />)}
          </Picker> */}
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '10%',
              height: 60,
              paddingTop: '3%',
            }}>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Âge
              </Text>
            </View>
            <View style={{flex: 0.6}}>
              <InputSpinner
                style={{marginTop: -10, marginLeft: '10%'}}
                max={80}
                min={12}
                step={1}
                color={'#8CBD3E'}
                value={this.state.age}
                onChange={(num) => {
                  this.setState({age: num});
                }}></InputSpinner>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '10%',
              height: 60,
              paddingTop: '3%',
            }}>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Adresse
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <Text
                style={{
                  fontSize: 16,
                  alignSelf: 'flex-end',
                  color: '#8CBD3E',
                  fontWeight: 'bold',
                }}>
                Rue Abd aziz Aroui 5000 Skaness Monastir Tunisia
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  avatar: {
    marginVertical: 0,
    height: 170,
    width: 170,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 80,
  },
  name: {
    fontSize: 28,
    marginVertical: 0,
    color: 'white',
    fontWeight: 'bold',
  },
  work: {
    fontSize: 15,
    color: 'white',
  },
  button: {
    height: 40,
  },

  containerPicker: {
    margin: 10,
    flex: 4,
    color: '#8CBD3E',
  },
});
