import React, {Component,createRef} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import { AppStyles } from '../../AppStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';

const actionSheetRef = createRef();


import {getCategoryName} from '../../data/MockDataAPI';
export default class PlanSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        iscalendervisible: false
      };
   }
  showDatePicker = ( ) => {
    this.setState({ iscalendervisible: true });

  };
  hideDatePicker = () => {
    this.setState({ iscalendervisible: false })
  };
  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = (item) => {
    // this.props.navigation.navigate('Recipe', { item });
    this.props.navigation.navigate('Recipe', {item});
  };
  handleConfirm = (date) => {
    this.hideDatePicker();
    let calories = this.state.item.calories;
    let title = this.state.item.title;
    let picture = this.state.item.photo_url;
    // await AsyncStorage.setItem('TASKS', JSON.stringify(item))
    this.props.navigation.navigate('Plan', {title, calories, picture});
  };
  render() {
    const {item} = this.props;
     return (
      item!==undefined?
      <View>
            <DateTimePickerModal
            isVisible={this.state.iscalendervisible}
            mode="date"
            // style={{color:"green"}}
            locale="fr_FR"
            date={new Date()}
            // textColor="red"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
            minimumDate={new Date(Moment().startOf('isoWeek'))}
            maximumDate={new Date(Moment().endOf('isoWeek'))}
          />
        <TouchableOpacity onPress={() =>actionSheetRef.current?.setModalVisible()}>
          <MaterialCommunityIcons
            style={{left: '90%'}}
            name="dots-horizontal"
            color="green"
            size={40}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
          <View style={styles.containerSelected}>
            <Image
              style={styles.photoSelected}
              source={{uri: item.photo_url}}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.calories} kcal</Text>

            {/* <Text numberOfLines = { 1} style={styles.description}>{item.description}</Text> */}
            <Text style={styles.category}>
              {getCategoryName(item.categoryId)}
            </Text>
          </View>
        </TouchableOpacity>
        <ActionSheet
        containerStyle={{ width: '95%',  }}
         ref={actionSheetRef}
      >
        <View style={{ flex: 1,marginBottom:10 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}
          >
                        <TouchableOpacity
            style={{
              width: '100%', height: 60, backgroundColor: '#81B522',
              alignItems: 'center', justifyContent: 'center'
            }}
            onPress={async () => {
              await this.showDatePicker(item)

            }}
          >
            <Text style={{ color: 'white', fontSize: 18,fontWeight:"bold" }}>  Ajouter à une autre date</Text>
          </TouchableOpacity>
           
          </View>
          <View>
    
          
            <TouchableOpacity
           onPress={() =>{
            actionSheetRef.current?.setModalVisible(false);
   
            this.onPressRecipe(item)} }
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                }}
              >
                <Text
                  style={{
                    color: AppStyles.color.primary,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                >
                  Voir détail 
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
                
              actionSheetRef.current?.setModalVisible(false);
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              }}
            >
              <Text
                style={{
                    color: AppStyles.color.primary
                    , fontSize: 20, fontWeight: 'bold' }}
              >
                Supprimer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            /> 
            <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          /> 
          <View
          style={{
            borderBottomColor: '#E0E0E3',
            borderBottomWidth: 1,
          }}
        /> 
        <View
        style={{
          borderBottomColor: '#E0E0E3',
          borderBottomWidth: 1,
        }}
      /> 
      <View
      style={{
        borderBottomColor: '#E0E0E3',
        borderBottomWidth: 1,
      }}
    />
        <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              }}
            >
              <Text
                style={{ color: '#FC5E45', fontSize: 20, fontWeight: 'bold' }}
              >
                Annuler
              </Text>
            </View>
          </TouchableOpacity>
          <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
              }}
            /> 
            <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          /> 
          <View
          style={{
            borderBottomColor: '#E0E0E3',
            borderBottomWidth: 1,
          }}
        /> 
        <View
        style={{
          borderBottomColor: '#E0E0E3',
          borderBottomWidth: 1,
        }}
      /> 
      <View
      style={{
        borderBottomColor: '#E0E0E3',
        borderBottomWidth: 1,
      }}
    />
      </ActionSheet>

      </View> 
      :null
    );
  }
}
