import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image, Picker} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputSpinner from 'react-native-input-spinner';

import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';

export default class HomeScreen extends React.Component {
  state = {
    country: 'uk',
    menu: 'athlete',
    calogire:2500,
    poid:30,
    objectif:60
  };

  render() {
 
    return (
      // <TabNavigator/>
      <View style={{backgroundColor: '#8CBD3E', flex: 1}}>
        <View style={{backgroundColor: 'white', flex: 0.55}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '10%',
              height: 60,
              paddingTop: '3%',
            }}>
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Menu
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <DropDownPicker
                items={[
                  {
                    label: 'Athlète',
                    value: 'athlete',
                    icon: () => (
                      <FontAwesome5 name="running" size={18} color="#900" />
                    ),
                  },
                  {
                    label: 'Keto',
                    value: 'Keto',
                    icon: () => <Icon name="activity" size={18} color="#900" />,
                  },
                ]}
                defaultValue={this.state.menu}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    menu: item.value,
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
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Objectif
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <DropDownPicker
                items={[
                  {
                    label: 'Se muscler',
                    value: 'uk',
                    icon: () => (
                      <Ionicons name="fitness" size={18} color="#900" />
                    ),
                  },
                  {
                    label: 'Perdre du poids',
                    value: 'france',
                    icon: () => (
                      <Ionicons
                        name="md-fitness-outline"
                        size={18}
                        color="#900"
                      />
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
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Poids actuel (kg)
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <InputSpinner
              style={{marginTop:-10,marginLeft:"10%"}}
              max={200}
                min={30}
                step={1}
                color={'#8CBD3E'}              
             
                value={this.state.poid}
                onChange={(num) => {
                  console.log(num);
                }}
                > 
       
             </InputSpinner>
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
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Objectif de poids (kg)
              </Text>
            </View>
            <View style={{flex: 0.7}}>
            <InputSpinner
              style={{marginTop:-10,marginLeft:"10%"}}
              max={200}
                min={30}
                step={1}
                color={'#8CBD3E'}              

                value={this.state.objectif}
                onChange={(num) => {
                  console.log(num);
                }}
                > 
       
             </InputSpinner>
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
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}>
                Objectif en calories
              </Text>
            </View>
            <View style={{flex: 0.7}}>
            <InputSpinner
              style={{marginTop:-10,marginLeft:"10%"}}
                max={4000}
                min={2000}
                step={1}
                color={'#8CBD3E'}              
 
                value={this.state.calogire}
                onChange={(num) => {
                 this.setState({calogire:num})
                }}
                > 
       
             </InputSpinner>
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
  containerPicker: {
    margin: 10,
    flex: 4,
    color: '#8CBD3E',
  },
  box: {
    justifyContent: 'flex-start',
    marginVertical: 10,
    flexDirection: 'row',
    height: 50,
    width: '92%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
