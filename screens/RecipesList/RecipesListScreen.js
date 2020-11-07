import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getIngredientName, getCategoryName } from '../../data/MockDataAPI';

export default class RecipesListScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title')
  //   };
  // };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe',{ item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View  style={{
           justifyContent: 'flex-start',
           marginVertical: 10,
             backgroundColor: 'white',
           alignSelf:"center",
           borderRadius: 10,
           padding: 10,
           elevation: 10,
           marginHorizontal:10,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 3 },
           shadowOpacity: 0.5,
           shadowRadius: 5,
      }}>
        <Image style={{height:100,width:120,borderRadius:20,marginTop:-30}} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
   
    const recipesArray = getIngredientName(1);
    console.log(recipesArray)
    return (
      <View>
        <FlatList
        showsHorizontalScrollIndicator={false}

          horizontal={true}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.ingredientId}`}
        />
      </View>
    );
  }
}
