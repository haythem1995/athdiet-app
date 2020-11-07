import React from 'react';
import {StyleSheet, Text, View,Animated,Easing} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Filter extends React.Component {

   constructor () {
    super()
    this.state={
         startValue: new Animated.Value(0),
        endValue: 1,
         duration: 5000,
       }
   }
  componentDidMount () {
    Animated.timing(this.state.startValue, {
        toValue: this.state.endValue,
        duration: this.state.duration,
        useNativeDriver: true,
      }).start();  }
 

 

 
    ItemClicked = (props) => (
        <TouchableOpacity
        
          style={{
     
            height: 45,
            margin: 5,
             // borderColor:"green",
            // borderWidth:1.5,
            backgroundColor: '#8CBD3E',
            borderRadius: 23,
            elevation: 2,
            shadowColor: '#000',
            marginVertical: 15,
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.5,
            shadowRadius: 5,
    
    
     
          }}>
          <Text style={{fontSize: 18, margin: 10, fontStyle: 'italic',fontWeight:"600",color:"white"
    }}>{props.name} </Text>
        </TouchableOpacity>
      );
  Item = (props) => (
    <TouchableOpacity
       style={{
 
        height: 40,
        margin: 5,
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


 
      }}>
      <Text style={{fontSize: 18, margin: 10, fontStyle: 'italic',fontWeight:"600",color:"grey"
}}>{props.name} </Text>
    </TouchableOpacity>
  );

  render() {
  
    return (
      // <TabNavigator/>
      <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
        
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Filter</Text>

        <Text style={{fontSize: 18, margin: 10,fontWeight:"bold", fontStyle: 'italic'}}>
          Type
        </Text>
        <View
          style={{backgroundColor: 'white', flexDirection: 'row',flexWrap:"wrap" }}>
          <this.ItemClicked  name={"Petit Déjeuner"} />
          <this.Item name={"Dîner"} />
          <this.Item name={"le déjeuner"} />
          <this.Item   name={"Snack"}/>
        </View>
        <Text style={{fontSize: 18, margin: 10,fontWeight:"bold", fontStyle: 'italic'}}>
          Régime
        </Text>
        <Animated.View
          style={{backgroundColor: 'white', flexDirection: 'row',flexWrap:"wrap" ,top:this.state.topPosition}}>
        <this.Item  name={"Végétarien"} />
          <this.Item name={"Vegan"} />
          <this.ItemClicked name={"Sans alcool"} />
          <this.Item   name={"Snack"}/>
   
          </Animated.View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
