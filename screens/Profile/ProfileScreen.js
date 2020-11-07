import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Dimensions, Image, ImageBackground } from 'react-native';
import  Slider  from 'react-native-slider';
import Svg, { Path } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from '../../Utils/api';
import AsyncStorage from '@react-native-community/async-storage';
import CalendarStrip from 'react-native-calendar-strip'
import Modal from 'react-native-modal';
import moment from 'moment';
import { AppStyles } from '../../AppStyles';
import { TextInput } from 'react-native-paper';
import { LineChart } from 'react-native-line-chart'
import SearchScreen from '../Search/SearchScreen';
import ActionButton from 'react-native-circular-action-menu';
const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    let startDate = moment();
    // Create a week's worth of custom date styles and marked dates.
    let customDatesStyles = [];
    let markedDates = [];
    for (let i = 0; i < 7; i++) {
      let date = startDate.clone().add(i, 'days');

      customDatesStyles.push({
        startDate: date, // Single date since no endDate provided
        dateNameStyle: { color: 'white' },
        dateNumberStyle: { color: 'white' },
        // Random color...
        //dateContainerStyle: { backgroundColor: "#d4d5d6" },
      });

      let dots = [];
      let lines = [];
      let petit = {
        calories: 200,
        categoryId: 3,
        description:
          '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.↵↵ -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. ↵↵ -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. ↵↵ -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.↵↵ -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.',
        photo_url:
          'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
        photosArray: [
          'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
          'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
          'https://advancelocal-adapter-image-uploads.s3.amaz…ws_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
          'https://img.thedailybeast.com/image/upload/c_crop,…years-to-develop/130923-gross-burger-tease_izz59e',
          'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg',
        ],
        recipeId: 122,
        ingredients: [[0, '200ml'], [1, '5g'][(2, '300g')]],
        time: '15',
        title: 'Oatmeal Cookies',
      };

      if (i % 2) {
        lines.push({
          color: "red",
          selectedColor: 'red',
        });
      }
      else {
        dots.push({
          color: 'red',
          selectedColor: 'red',
        });
      }
      markedDates.push({
        date,
        dots,
        lines
      });
    }
    this.state = {
      value: 15,
      poids: 0,
      taille: 0,
      poidsCible: 0,
      idUser: "",
      selectedDate: '',
      customDatesStyles,
      startDate,
      formattedDate: moment(new Date()).format('YYYY-MM-DD'),
      isModalVisible: false,
      test: true,
      dataa: [],
      imc: 0,
      imcR: "yellow",
      imcN: "",
      sliderValue:0 
    }
  }


  // datesBlacklistFunc = date => {
  //   return date.isoWeekday() === 6; // disable Saturdays
  // }


  onDateSelected = date => {
    this.setState({ formattedDate: date.format('YYYY-MM-DD') });

  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
    this.setState({imc: (this.state.poids / (((this.state.taille / 100) * (this.state.taille / 100)))).toFixed(2)})
    this.setState({sliderValue: this.state.imc})
    
    if(this.state.imc >=30 && this.state.imc <35){
  
      this.setState({imcR: "#F58B13"})
      this.setState({imcN: "Obésité modérée"})
    
    } else 
    if(this.state.imc >=25 && this.state.imc <30){
      console.log("this.state.imcdsds", this.state.imc )
      this.setState({imcR: "#9AF025",imcN: "Surpoids"})
    }else
    if(this.state.imc >=18.5 && this.state.imc <25){
      
      this.setState({imcR: "#25F041", imcN: "Poids normal"})
    }else
    if(this.state.imc >=16 && this.state.imc <18.5){
      this.setState({imcR: "#182C5C"})
      this.setState({imcN: "Insuffisance pondérale"})
    }else
    if(this.state.imc <16){
      this.setState({imcR: "#2ACCD1"})
      this.setState({imcN: "Insuffisance pondérale grave"})
    }
    else {
      this.setState({imcR: "#F60703"})
      this.setState({imcN: "Obésité très grave"})
  }
    
    

  };
 

  getCurrentUser = async (idUser) => {
    try {
      const idUser = await AsyncStorage.getItem('idUser')

      if (idUser != null) {
        axios.get('getUser/' + idUser).then((res, req) => {
          if (res.status == 200) {
            console.log("tessst", res.data.data)
            this.setState({ 
              poids: res.data.data.poids, 
              taille: res.data.data.taille,
              poidsCible: res.data.data.poidsCible })
            this.setState({imc: (this.state.poids / (((this.state.taille / 100) * (this.state.taille / 100)))).toFixed(2) })
             if(this.state.imc >=30 && this.state.imc <35){
  
              this.setState({imcR: "#F58B13"})
              this.setState({imcN: "Obésité modérée"})
            
            } else 
            if(this.state.imc >=25 && this.state.imc <30){
              console.log("this.state.imcdsds", this.state.imc )
              this.setState({imcR: "#9AF025",imcN: "Surpoids"})
            }else
            if(this.state.imc >=18.5 && this.state.imc <25){
              
              this.setState({imcR: "#25F041", imcN: "Poids normal"})
            }else
            if(this.state.imc >=16 && this.state.imc <18.5){
              this.setState({imcR: "#182C5C"})
              this.setState({imcN: "Insuffisance pondérale"})
            }else
            if(this.state.imc <16){
              this.setState({imcR: "#2ACCD1"})
              this.setState({imcN: "Insuffisance pondérale grave"})
            }
            else {
              this.setState({imcR: "#F60703"})
              this.setState({imcN: "Obésité très grave"})
          }
        }

        });
      }

    } catch (error) {
      console.log(error)
    }
  }


  componentDidMount() {
    this.getCurrentUser();
    let petit = {
      calories: 200,
      categoryId: 3,
      description:
        '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.↵↵ -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. ↵↵ -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. ↵↵ -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.↵↵ -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.',
      photo_url:
        'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      photosArray: [
        'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
        'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
        'https://advancelocal-adapter-image-uploads.s3.amaz…ws_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
        'https://img.thedailybeast.com/image/upload/c_crop,…years-to-develop/130923-gross-burger-tease_izz59e',
        'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg',
      ],
      recipeId: 122,
      ingredients: [[0, '200ml'], [1, '5g'][(2, '300g')]],
      time: '15',
      title: 'Oatmeal Cookies',
    };
    //  setTimeout(() => {
    //   this.setState({dataa : [petit]});
    // }, 2000); 
  }

  modifierUser = async () => {
    try {
      const idUser = await AsyncStorage.getItem('idUser')
      axios.put('update/' + idUser, {
        poids: this.state.poids,
        taille: this.state.taille,
      })
      this.toggleModal();
    } catch (error) {
      console.log(error)
    }
  }
  render() {

    return (
      <ImageBackground source={require('../../assets/icons/4541.jpg') }style={styles.image}>
      <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={styles.container}>
          <CalendarStrip
            selectedDate={this.state.formattedDate}
            scrollable={false}
            highlightDateNameStyle={{color:'white',fontWeight:"bold" ,}}
            highlightDateNumberStyle={{color:"white",fontWeight:'bold' }}
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: 'rgba(76, 175, 80, 0.6)' }}
            style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
            calendarHeaderStyle={{ color: 'white' }}
            calendarColor={AppStyles.color.primary}
            dateNumberStyle={{ color: 'white' }}
            dateNameStyle={{ color: 'white' }}
             iconContainer={{ flex: 0.1 }}
            //customDatesStyles={this.state.customDatesStyles}}
            datesBlacklist={this.datesBlacklistFunc}
            onDateSelected={this.onDateSelected}
            
          />
          {this.state.dataa[0] !== undefined ?
            <View style={{ flex: 0.7 }}>
              <SearchScreen
                data={this.state.dataa[0]}
                route={this.props.route}
                navigation={this.props.navigation}
              />
            </View>
            : <View style={styles.appButtonContainer}
            >
                          <Text style={styles.appButtonText}>Ajouter votre plan personnalisée pour le :</Text>
              <Text style={[styles.appButtonText, { fontSize: 18 }, {paddingBottom: 50}]}>  {this.state.formattedDate}</Text>
        <ActionButton  buttonColor="black" radius={80}    position="center" btnOutRange="rgba(76, 175, 80, 0.8)" bgColor="rgba(0,0,0,0.6)">

<ActionButton.Item  title="New Task" >
<TouchableOpacity style={{width:150,flexDirection:'row', marginBottom:130}}
onPress={() => this.props.navigation.navigate("Plan")}>
          <Image
    source={require('../../assets/soup.png')}
    style={{ width: 40, height: 40, }}
  />
<Text
            style={{
              fontSize: 20,
              marginTop:10,
              marginLeft:4,
             color:"white",
             fontWeight:"bold"
            }}
          >     
            Dinner 
          </Text>
          </TouchableOpacity>
 </ActionButton.Item>
<ActionButton.Item    title="Notifications" >
 
<TouchableOpacity style={{width:165, height:50, marginBottom:100,flexDirection:'row', marginLeft:40}}
onPress={() => this.props.navigation.navigate("Plan")}>
<Image
                source={require('../../assets/omelette.png')}
                style={{ width: 40, height: 40, }}
              />
                        
            <Text
                        style={{
                          fontSize: 20,
                         marginTop:10,
                          marginLeft:4,
                         color:"white",
                         fontWeight:"bold"
                        }}
                      >
                        
                        Petit-déjeuner 
   
                      </Text>

                      </TouchableOpacity>
 </ActionButton.Item>
<ActionButton.Item   title="All Tasks" >
 
 </ActionButton.Item>
 <ActionButton.Item   title="All Tasks" >
    
 <TouchableOpacity style={{width:158,flexDirection:'row', marginBottom:120, marginLeft: 60}}
 onPress={() => this.props.navigation.navigate("Plan")}>
             


                      <Image
                source={require('../../assets/lunch.png')}
                style={{ width: 50, height: 50, }}
              />
              
 <Text
                        style={{
                        fontSize: 20,
                        marginTop:10,
                        marginRight:4,
                        color:"white",
                        fontWeight:"bold"
                        }}
                      >                  
Déjeuner
                      </Text>


                      </TouchableOpacity>
 </ActionButton.Item>
</ActionButton>

            </View>
          }
          <View style={styles.boxx}>
          <View style={{flex:1}, {height:220}}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April'],
              datasets: [
                {
                  data: [
                    this.state.poids,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={width-(width/9)}
            height={220}
            yAxisLabel={'Rs'}
            chartConfig={{
              backgroundColor: '#000',
              backgroundGradientFrom: 'white',
              backgroundGradientTo: "white",
              decimalPlaces: 0,
              color: (opacity = 255) => `blue`,
              style: {
                borderRadius: 10,

              },
            }}
            bezier
            style={{
              borderRadius: 16,
              marginTop: 15
            }}
          />

          </View>

          <View style={[styles.box, {flex:1}, { marginTop: 50 }]} >
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Text style={[styles.text, { fontSize: 16 }]}>Poids Actuel:</Text>
              <Text style={[styles.text, { fontSize: 16 }]}>Taille:</Text>
              <Text style={[styles.text, { fontSize: 16 }]}>Poids Cible:</Text>
              <Text style={[styles.text, { fontSize: 16 }]}></Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={[styles.text, { fontSize: 20 }]}>{this.state.poids}</Text>
              <Text style={[styles.text, { fontSize: 20 }]}>{this.state.taille}</Text>
              <Text style={[styles.text, { fontSize: 20 }]}>{this.state.poidsCible}</Text>
              <Text style={[styles.text1, { fontSize: 16,fontWeight:"bold",fontStyle:"italic" }]} onPress={this.toggleModal}>Modifier</Text>
            </View>
          </View>
          </View>
          <View style={[styles.box2, { marginTop: 16 }]}>
            <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", paddingTop: 20 }}>IMC: {this.state.imc}  </Text>
            <View style={styles.container2}>
              <Slider
                style={{width: "100%", height: 40}}
                minimumValue={15}
                maximumValue={40}
                minimumTrackTintColor={this.state.imcR}
                maximumTrackTintColor="gray"
                step={0.1}
                value={parseInt(this.state.imc)}
                disabled= {true}
                thumbTintColor="black"
                thumbStyle={{width:10  , height: 40}}
                trackStyle={{height:30}}
              />
              <View style={{flexDirection:"row"}}>
              <Text style={{ fontWeight: "bold", fontSize: 8}}>15</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:2}}>16</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:12}}>18.5</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:60}}>25</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:45}}>30</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:45}}>35</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8, marginLeft:45}}>40</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", color:this.state.imcR }}>{this.state.imcN}  </Text>
            <Image    
                          style={{alignSelf:"center", marginTop: 50}} 
          source={require('../../assets/icons/bodych.png')}/>
            </View>




          <View style={{ alignItems: "center", alignContent: "center" }}>
            <Modal isVisible={this.state.isModalVisible} >
              <View style={[styles.modalContainer]}>
                <View padding={20}>
                  <Text> Poids:</Text>
                  <TextInput
                    style={styles.body}
                    placeholder="Poids"
                    onChangeText={text => this.setState({ poids: text })}
                    value={this.state.poids}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent">
                  </TextInput>
                  <Text> Taille:</Text>
                  <TextInput
                    style={styles.body}
                    placeholder="Taille"
                    onChangeText={text => this.setState({ taille: text })}
                    value={this.state.taille}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent">
                  </TextInput>
                </View>
                <View borderRadius={10}>
                  <Button title="Enregistrer" onPress={this.modifierUser} color={AppStyles.color.primary}
                  />
                </View>
              </View>
            </Modal>
          </View>

        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    margin: 20,
    height: 50,
  },
  image: {
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      justifyContent: "center"
  },
  circleContainer: {
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "rgba(76, 175, 80, 0.8)",

  },
  appButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    height: 200,
    backgroundColor: "rgba(76, 175, 80, 0.6)",
    opacity: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10
  },
  appButtonText: {
    marginTop: 5,
    color: "#fff",
    alignSelf: "center",
  },
  body: {
    height: 42,
    color: AppStyles.color.text
  },

  modalContainer: {
    borderRadius: 10,
    padding: 1,
    backgroundColor: "white",
    height: 200,
    width: "100%",

  },
  historiqueContainer: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 2,
    height: 300,
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 150
  },
  text: {
    color: "#AEB5BC",
    fontFamily: "HelveticaNeue",
    color: "#52575D",
    padding: 10
  },
  text1: {
    color: "#AEB5BC",
    fontFamily: "HelveticaNeue",
    color: AppStyles.color.primary,
    padding: 10
  },
  box: {
    //alignItems: "center",
    flex: 2,
    flexDirection: "row",
    height: 180,
  },
  boxx: {
    flex: 2,
    flexDirection: "column",
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 2,
    height: 500,
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  box2: {
    flex: 2,
    marginRight: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginVertical: 2,
    height: 660,
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },


});