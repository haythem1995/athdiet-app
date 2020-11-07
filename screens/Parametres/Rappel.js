import React from 'react';
import { StyleSheet, ScrollView, Text, View , Image ,Picker } from 'react-native';
 
 import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Rappel extends React.Component {
  
    state = {
        country: 'uk',
        menu:'athlete'
    }
  
 
 
  render() {
 
    return (

      // <TabNavigator/>
      <View style={{  backgroundColor:'#8CBD3E' ,flex:1}}>
        
        <View style={{  backgroundColor:'white' ,flex:0.55}}>
        <View style={{ flexDirection:'row',marginHorizontal:"10%",height:60,paddingTop:"3%"}}>
            
        <View style={{ flex:0.5}}>


  <Text
                      style={{
                        fontSize: 16,
                        color:"black",
                        fontWeight:"700",
                        fontStyle:"italic",

                 
                      }}
                    >
                      


                    Petit-déjeuner
 
                    </Text>
                    </View>
                    <View style={{ flex:0.7 }}>

 
 
                  </View>
                    </View>
                    <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            />  
             <View style={{ flexDirection:'row',marginHorizontal:"10%",height:60,paddingTop:"3%"}}>
            
            <View style={{ flex:0.5}}>
    
    
      <Text
                          style={{
                            fontSize: 16,
                            color:"black",
                            fontWeight:"700",
                            fontStyle:"italic",
    
                     
                          }}
                        >
                          
    
    
                        Objectif
     
                        </Text>
                        </View>
                        <View style={{ flex:0.7 }}>
    
             
     
                      </View>
                        </View> 
            <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          /> 
             <View style={{ flexDirection:'row',marginHorizontal:"10%",height:60,paddingTop:"3%"}}>
        <View style={{ flex:0.5}}>


  <Text
                      style={{
                        fontSize: 16,
                        color:"black",
                        fontWeight:"700",
                        fontStyle:"italic",
                 
                      }}
                    >
                      


                    Poids actuel (kg)
 
                    </Text>
                    </View>
                    <View style={{ flex:0.7 }}>


               
                  </View>
                    </View>
                    <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            /> 
               <View style={{ flexDirection:'row',marginHorizontal:"10%",height:60,paddingTop:"3%"}}>
        <View style={{ flex:0.5}}>


  <Text
                      style={{
                        fontSize: 16,
                        color:"black",
                        fontWeight:"700",
                        fontStyle:"italic",
                 
                      }}
                    >
                      


                      Objectif de poids (kg)
 
                    </Text>
                    </View>
                    <View style={{ flex:0.7 }}>


 
                  </View>
                    </View>
                    <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            /> 
                    <View style={{ flexDirection:'row',marginHorizontal:"10%",height:60,paddingTop:"3%"}}>
        <View style={{ flex:0.5}}>


  <Text
                      style={{
                        fontSize: 16,
                        color:"black",
                        fontWeight:"700",
                        fontStyle:"italic",

                 
                      }}
                    >
                      


                      Objectif en calories
 
                    </Text>
                    </View>
                    <View style={{ flex:0.7 }}>



               
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
 
    
 
  });
  