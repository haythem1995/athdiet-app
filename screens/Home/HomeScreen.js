import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image  } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategoryName } from '../../data/MockDataAPI';
import axios from '../../Utils/api'
import AsyncStorage from '@react-native-community/async-storage'
import TabNavigator from '../../Navigations/TabNavigator';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
   
    // headerLeft: () => <MenuImage
    //   onPress={() => {
    //     navigation.openDrawer();
    //   }}
    // />
  });

  constructor(props) {
    super(props);
    this.state = {
      idUser: '',
  };
  }
  
  getCurrentUser =  async () => {
    try {
      const value = await AsyncStorage.getItem('idUser').then(
        this.setState({idUser: value})
        )
        if(value !== null){
            console.log("test", value );
        } 
      ;
    }catch(err){
      console.log(err);
    }
}


  componentDidMount() {
    this.getCurrentUser();
}

  onPressRecipe = item => {
    
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (

      // <TabNavigator/>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
