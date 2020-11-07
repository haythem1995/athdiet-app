import React from 'react';
import { StyleSheet 
    , Text, View , Image, ImageBackground  } from 'react-native';
 
 import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ActionButton from 'react-native-circular-action-menu';
 

 
export default class HomeScreen extends React.Component {
  
 
  
 
  render() {
    return (

      // <TabNavigator/>
      <ImageBackground source={require('../../assets/icons/4541.jpg') }style={styles.image}>
      <View style={{flex:1,justifyContent:"space-between"}}>
  
      {/* <Svg
        height="140"
        width="200%"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: 50, marginLeft: -197 }}
      >
        <Path fill="#8CBD3E" fill-opacity="-1" d="M0,224L80,234.7C160,245,320,267,480,277.3C640,288,800,288,960,277.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </Svg> */}
            <View style={{justifyContent:"center" ,alignContent:"center",alignSelf:"center",marginTop:"4%",flex:0.4 }}>
     
      <View    
       style={{justifyContent:"center",alignSelf:"center"}} >

      <Image
                source={{ uri: 'https://www.endocrinologyadvisor.com/wp-content/uploads/sites/9/2020/04/diet-plan_G_1176304726.jpg' }}
                style={{ width: 90, height: 90 ,borderRadius:25,marginVertical:10}}
                
              />
                  </View>

      <Text style={{   fontSize: 24, color: "white", textAlign: "center",alignSelf:"center",fontWeight:"bold" }} >
          
          Anas Zayene
      
      </Text> 
      </View>
      <View style={{justifyContent:"center" ,alignContent:"center",alignSelf:"center",marginTop:"4%",flex:0.8,width:"100%" }}>
      <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Profile')
                }
              >
                <View style={styles.box}>
                  <View style={{ flex: 0.1 }}>
                  <MaterialIcon
                          name="account-circle"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                  <View style={{ flex: 0.5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: '10%',
                        color: 'grey',
                      }}
                    >
                      Profil
                    </Text>
                  </View>
                  <View style={{ flex: 0.7,justifyContent:"flex-end",alignSelf:"flex-end"  }}>
                  <Ionicons 
                  style={{alignSelf:"flex-end"}}
                          name="ios-arrow-forward"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                </View>
              </TouchableOpacity>
      <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Objectif')
                }
              >
                <View style={styles.box}>
                  <View style={{ flex: 0.1 }}>
                  <MaterialIcon
                          name="calendar-today"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                  <View style={{ flex: 0.5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: '10%',
                        color: 'grey',
                      }}
                    >
                      Mes objectifs
                    </Text>
                  </View>
                  <View style={{ flex: 0.7,justifyContent:"flex-end",alignSelf:"flex-end"  }}>
                  <Ionicons 
                  style={{alignSelf:"flex-end"}}
                          name="ios-arrow-forward"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Rappels')
                }
              >
                <View style={styles.box}>
                  <View style={{ flex: 0.1 }}>
                  <MaterialIcon
                          name="alarm"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                  <View style={{ flex: 0.3 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: '10%',
                        color: 'grey',
                      }}
                    >
                      Rappels
                    </Text>
                  </View>
                  <View style={{ flex: 0.7,justifyContent:"flex-end",alignSelf:"flex-end"  }}>
                  <Ionicons 
                  style={{alignSelf:"flex-end"}}
                          name="ios-arrow-forward"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Information générales')
                }
              >
                <View style={styles.box}>
                  <View style={{ flex: 0.15 }}>
                  <MaterialIcon
                          name="message-cog"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                  <View style={{ flex: 1.5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: '10%',
                        color: 'grey',
                      }}
                    >
                      Langue de l'application
                    </Text>
                  </View>
                  <View style={{ flex: 0.7,justifyContent:"flex-end",alignSelf:"flex-end"  }}>
                  <Ionicons 
                  style={{alignSelf:"flex-end"}}
                          name="ios-arrow-forward"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Plan')
                }
              >
                <View style={styles.box}>
                  <View style={{ flex: 0.15 }}>
                  <MaterialIcon
                          name="alert-circle-outline"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                  <View style={{ flex: 1.5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: '10%',
                        color: 'grey',
                      }}
                    >
                      


                      À propos l'application
 
                    </Text>
                  </View>
                  <View style={{ flex: 0.6,justifyContent:"flex-end",alignSelf:"flex-end"  }}>
                  <Ionicons 
                  style={{alignSelf:"flex-end"}}
                          name="ios-arrow-forward"
                          size={25}
                          color="#8CBD3E"
                        />

                  </View>
                </View>
              </TouchableOpacity>
                   
     
              </View>
         {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton   btnOutRange="#8CBD3E" radius={260} position="right" buttonColor="black" bgColor="rgba(0,0,0,0.5)">

          <ActionButton.Item  title="New Task" onPress={() =>  this.props.navigation.navigate('Plan')
}>
          <View style={{width:158,flexDirection:'row'}}>
                      


          <Text
                      style={{
                        fontSize: 20,
                        marginTop:10,
                        marginRight:4,
                       color:"white",
                       fontWeight:"bold"
                      }}
                    >
                      


                      Dinner 
 
                    </Text>
                    <Image
              source={require('../../assets/soup.png')}
              style={{ width: 50, height: 50, }}
            />
                    </View>
           </ActionButton.Item>
          <ActionButton.Item    title="Notifications" onPress={() => { this.props.navigation.navigate('Plan')
}}>
           
          <View style={{width:158,flexDirection:'row'}}>
                      


                      <Text
                                  style={{
                                    fontSize: 20,
                                    marginTop:25,
                                    marginRight:4,
                                   color:"white",
                                   fontWeight:"bold"
                                  }}
                                >
                                  
            
            
                                  
                                le déjeuner
                                  
             
                                </Text>
                                <Image
                          source={require('../../assets/lunch.png')}
                          style={{ width: 80, height: 80, }}
                        />
                                </View>
           </ActionButton.Item>
          <ActionButton.Item   title="All Tasks" onPress={() => { this.props.navigation.navigate('Plan')
}}>
           
          <View style={{width:158,flexDirection:'row'}}>
                      


                      <Text
                                  style={{
                                    fontSize: 20,
                                    marginTop:10,
                                    marginRight:4,
                                   color:"white",
                                   fontWeight:"bold"
                                  }}
                                >
                                  
            
            
                                  Snack 1  
             
                                </Text>
                                <Image
                          source={require('../../assets/fruits.png')}
                          style={{ width: 60, height: 60, }}
                        />
                                </View>
           </ActionButton.Item>
           <ActionButton.Item     title="All Tasks" onPress={() => { this.props.navigation.navigate('Plan')
}}>
              
           <View style={{marginBottom:120,marginRight:180,width:158,flexDirection:'row'}} >
                      


                      <Text
                                  style={{
                                    fontSize: 20,
                                    marginTop:10,
                                    marginRight:4,
                                   color:"white",
                                   fontWeight:"bold"
                                  }}
                                >
                                  
            
            
                                  petit-déjeuner 
             
                                </Text>
                                <Image
                          source={require('../../assets/omelette.png')}
                          style={{ width: 60, height: 60, }}
                        />
                                </View>
           </ActionButton.Item>
        </ActionButton>
        
     </View>
     </ImageBackground>
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
    image: {
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      justifyContent: "center"
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
    box: {
      justifyContent: 'flex-start',
      marginVertical: 10,
      flexDirection: 'row',
      height: 50,
      width: '92%',
      backgroundColor: 'white',
      alignSelf:"center",
      borderRadius: 10,
      padding: 10,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  });
  