import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
 
  ProgressBarAndroid,
  Platform,
  ProgressViewIOS,
  Keyboard
} from 'react-native';
 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {AppStyles} from '../../../AppStyles';
import SearchScreen from '../../Search/SearchScreen';
import { GuideMark } from 'react-native-guide-mark';

const defaultStyle = {
  width: '50%',
  height: 10,
  backgroundColor: 'transparent',
};
const Day1Screen = ({navigation, route}) => {
   const [selected, setSelected] = React.useState(1);
  const [Loading,setLoading]=React.useState(true)
  const [Hide,setHide]=React.useState(false)
  const [Visible,setVisible]=React.useState(true)
  const [VisibleStep,setVisibleStep]=React.useState(false)

  const [data, setData] = React.useState([]);


  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setHide(true)
   };

  const _keyboardDidHide = () => {
    setHide(false)
  };

  useEffect(() => {
 

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
       setLoading(false)
      setData([petit]);
    
  }, []);

  return (
    <View style={{flex: 1, }}> 
      {route.key==="Day1Screen"? 
      <GuideMark
      buttonTitle="Suivant"
      title="Step 1"
      description="vous devez choisir un repas"
      visible={Visible}
      onButtonPress={() => {setVisible(false)
      setVisibleStep(true)
      }}
      top={"70%"}
      left={0}

      markSize={200}
    />
    :null
      }
         {route.key==="Day1Screen"? 
      <GuideMark
      buttonTitle="Suivant"
      title="Step 2"
      description="vous devez choisir un repas"
      visible={VisibleStep}
      onButtonPress={() => setVisibleStep(false)}
      top={0}
      left={40}

      markSize={200}
    />
    :null
      }
    {!Hide? 
      <View style={styles.boxDiete}>
        <View style={styles.boxTotale}>
          <Text style={styles.indicatorTotale}> 49</Text>
          <Text
            style={{color: 'grey', textAlign: 'center', fontWeight: 'bold'}}>
            {' '}
            KCAL
          </Text>
        </View>

        {Platform.OS === 'android' ? (
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.3}}>
                <Text style={styles.indicator}> Carbs</Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                }}>
                <ProgressBarAndroid
                  color={AppStyles.color.primary}
                  styleAttr="Horizontal"
                  progress={0.2}
                  indeterminate={false}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.3}}>
                <Text style={styles.indicator}> Proteins</Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                }}>
                <ProgressBarAndroid
                  color={AppStyles.color.primary}
                  styleAttr="Horizontal"
                  progress={0.3}
                  indeterminate={false}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.3}}>
                <Text style={styles.indicator}> Fats</Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                }}>
                <ProgressBarAndroid
                  color={AppStyles.color.primary}
                  styleAttr="Horizontal"
                  progress={0.6}
                  indeterminate={false}
                />
              </View>
            </View>
            {/* <View    style={{flexDirection:'row'}}> 
                <View    style={{flex:0.3}}> 

                <Text  style={styles.indicator}> Indicator</Text>
                </View> 
                <View    style={{
                  flex:0.7
                }}> 

                  <ProgressBarAndroid  color={AppStyles.color.primary} styleAttr = "Horizontal" progress = { 0.9 } indeterminate = { false } /> 
                  </View> 

                 </View>   */}
          </View>
        ) : (
          <ProgressViewIOS progress={this.state.Progress_Value} />
        )}
      </View>
      :null
    }
        {!Hide? 

      <KeyboardAvoidingView style={{flex: 0.38}} behavior={'padding'}>
        <View style={styles.repa}>
          <TouchableOpacity
            onPress={() => setSelected(0)}
            style={selected === 0 ? styles.boxSelected : styles.box}>
            {data[0] !== undefined ? (
              <MaterialCommunityIcons
                style={styles.IconStyle}
                name="check-circle-outline"
                color="green"
                size={30}
              />
            ) : null}

            <View>
              <Image
                source={require('../../../assets/omelette.png')}
                style={{width: 50, height: 50}}
              />
              <Text
                style={selected === 0 ? styles.labelSelected : styles.label}>
                petit-déjeuner
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={selected === 1 ? styles.boxSelected : styles.box}>
            {data[1] !== undefined ? (
              <MaterialCommunityIcons
                style={styles.IconStyle}
                name="check-circle-outline"
                color={AppStyles.color.primary}
                size={30}
              />
            ) : null}
            <View>
              <Image
                source={require('../../../assets/fruits.png')}
                style={{width: 50, height: 50}}
              />
              <Text
                style={selected === 1 ? styles.labelSelected : styles.label}>
                Snack 1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={selected === 2 ? styles.boxSelected : styles.box}>
            {data[2] !== undefined ? (
              <MaterialCommunityIcons
                style={styles.IconStyle}
                name="check-circle-outline"
                color="green"
                size={30}
              />
            ) : null}

            <View>
              <Image
                source={require('../../../assets/lunch.png')}
                style={{width: 50, height: 50}}
              />
              <Text
                style={selected === 2 ? styles.labelSelected : styles.label}>
                
              le déjeuner

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(3)}
            style={selected === 3 ? styles.boxSelected : styles.box}>
            {data[3] !== undefined ? (
              <MaterialCommunityIcons
                style={styles.IconStyle}
                name="check-circle-outline"
                color="green"
                size={30}
              />
            ) : null}
            <View>
              <Image
                source={require('../../../assets/soup.png')}
                style={{width: 50, height: 50}}
              />
              <Text
                style={selected === 3 ? styles.labelSelected : styles.label}>
                Dîner
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
 :null}

      <View style={{flex: 0.7}}>
        <SearchScreen
          data={data[selected]}
          route={route}
          selected={selected}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  repa: {
    flex: 0.38,
    flexDirection: 'row',
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
    fontSize: 11,
  },
  labelSelected: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
    fontSize: 13,
  },
  indicator: {
    color: 'grey',
  },
  indicatorTotale: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  IconStyle: {
    position: 'absolute',
    left: '110%',
    top: -6,
  },
  box: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 110,
    margin: 5,
    width: '100%',
    // borderColor:"green",
    // borderWidth:1.5,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    marginVertical: 15,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  boxDiete: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 130,
    margin: 5,
    flex: 0.2,
    width: '95%',
    // borderColor:"green",
    // borderWidth:1.5,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    marginVertical: 15,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  boxTotale: {
    paddingHorizontal: 25,
    height: 70,
    justifyContent: 'center',
    flex: 0.2,
    width: '95%',
    // borderColor:"green",
    // borderWidth:1.5,
    backgroundColor: 'white',
    borderRadius: 10,

    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  boxSelected: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 130,
    margin: 5,
    width: '100%',
    backgroundColor: AppStyles.color.primary,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default Day1Screen;
