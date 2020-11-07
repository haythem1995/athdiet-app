import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import styles from './styles';
import {ListItem, SearchBar} from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from '../../data/MockDataAPI';
import SelectedItem from './SelectedRepas';

const recipeArray1 = getRecipesByRecipeName('');
const recipeArray2 = getRecipesByCategoryName('');
const recipeArray3 = getRecipesByIngredientName('');
const aux = recipeArray1.concat(recipeArray2);
const recipeArray = [...new Set(recipeArray1)];

export default class PlanSearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = (item) => {
     // this.props.navigation.navigate('Recipe', { item });
    this.props.navigation.navigate('Recipe', {item,route:this.props.route});
  };

  renderRecipes = ({item}) =>
    item !== undefined ? (
      <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{uri: item.photo_url}} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.calories} kcal</Text>

          {/* <Text numberOfLines = { 1} style={styles.description}>{item.description}</Text> */}
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableOpacity>
    ) : null;

  render() {
    const {data} = this.props;

    return (
      <View style={{backgroundColor: 'transparent'}}>
        {this.props.selected ? (
          <SelectedItem navigation={this.props.navigation} item={data[0]} />
        ) : (
            <View style={{backgroundColor: 'transparent', marginBottom: 75,marginTop:"8%"}}>
              {/* <Text style={{ fontWeight: "bold", fontSize: 14, textTransform: "uppercase", marginLeft: 10 }}>{this.props.name}</Text>  */}
              <FlatList
                //  horizontal={true}
                // style={{ height: 250 }}
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                renderItem={this.renderRecipes}
                keyExtractor={(item) => `${item.recipeId}`}
              />
            </View>
        )}
      </View>
    );
  }
}
