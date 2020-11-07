import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import {ListItem, SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {getMeals} from '../redux/Meals/actions/index'
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
  getRecipesByCategoryID,
  getRecipesByRecipeNameAndCateg,
} from '../../data/MockDataAPI';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PlanSearchScreen from './PlanSearchScreen';
const recipeArray1 = getRecipesByRecipeName('');
const recipeArray2 = getRecipesByCategoryName('');
const recipeArray3 = getRecipesByIngredientName('');
const aux = recipeArray1.concat(recipeArray2);
const recipeArray = [...new Set(aux)];
class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      data: recipeArray,
      SelectedItem: [],
      active: false,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.SelectedItem) {
      return {
        SelectedItem: [nextProps.data],
      };
    }

    return null;
  }
  componentDidMount() {
    this.props.getMeals()
    // console.log('header', (this.props.route.params ) );
    // if (this.props.route.params?.searchText) {
    //   // console.log("goo",this.props.route.params?.searchText)
    //   // this.setState({value:this.props.route.params?.searchText})
    //   this.handleSearch('',this.props.route.params?.searchText)
    // }
  }

  handleSearch = (text) => {
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryID(text);
    var recipeArray3 = getRecipesByRecipeName(text);
    var aux = recipeArray1.concat(recipeArray2);
    // console.log("bycat",recipeArray2)
    var recipeArray = [...new Set(aux)];
    if (text === '') {
      this.setState({
        value: text,
        data: aux,
      });
    } else {
      this.setState({
        value: text,
        data: recipeArray3,
      });
    }
  };

  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = (item, route) => {
    this.props.navigation.navigate('Recipe', {
      item: item,
      route: this.props.route,
    });
  };

  renderRecipes = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressRecipe(item, this.props.route)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const {value, data} = this.state;
    const {navigation, route} = this.props;
         return (
          // <ImageBackground source={require('../../assets/icons/3236901.jpg') }style={styles.image}>
      <View style={styless.Content}>
        {this.state.SelectedItem.length === 0 ||
        this.state.SelectedItem[0] === undefined ? (
          <View style={{flexDirection: 'row', height: 70}}>
            <SearchBar
              containerStyle={{
                backgroundColor: 'transparent',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                margin: 7,
                flex: 1,
              }}
              inputContainerStyle={{
                backgroundColor: '#EDEDED',
              }}
              inputStyle={{
                backgroundColor: '#EDEDED',
                borderRadius: 10,
                color: 'black',
                width: 50,
              }}
              searchIcond
              clearIcon
              //lightTheme
              round
              onChangeText={(text) => this.handleSearch(text)}
              onClear={() => this.handleSearch('')}
              placeholder="Rechercher"
              value={value}
            />
            <TouchableOpacity
              style={{alignSelf: 'center', justifyContent: 'flex-start'}}
              onPress={() => this.props.navigation.navigate('Filter')}>
              <Ionicons name="ios-filter" size={35} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}
        {this.state.SelectedItem.length === 0 ||
        (this.state.SelectedItem[0] === undefined && data.length > 0) ? (
          <PlanSearchScreen
            route={this.props.route}
            name={''}
            navigation={navigation}
            data={data}
          />
        ) : (
          <ScrollView style={{top: 10, backgroundColor: 'trasparent'}}>
            <PlanSearchScreen
              selected={true}
              navigation={navigation}
              data={this.state.SelectedItem}
            />
            {/* <PlanSearchScreen name={"Collation"} navigation={this.props.navigation} data={recipeArray}  />
            <PlanSearchScreen name={"Déjeuner"} navigation={this.props.navigation}data={recipeArray} />
            <PlanSearchScreen name={"Dîner"} navigation={this.props.navigation} data={recipeArray}  /> */}
          </ScrollView>
        )}
      </View>
      // </ImageBackground>
    );
  }
}

const mapStateToProps = ({Meals}) => {
  const {meals} = Meals;

  return {meals};
};
export default connect(mapStateToProps, {getMeals})(SearchScreen);

const styless = StyleSheet.create({
  Content: {
    flex:1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    // top: 50,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      justifyContent: "center"
  },
  category: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent : 'space-between',
  },
  button: {
    margin: 10,
    // backgroundColor: "#B0D66F",
    color: 'gray',
    borderColor: 'green',
    borderRadius: 5,
    width: 60,
  },
  buttonactive: {
    margin: 10,
    backgroundColor: '#B0D66F',
    color: 'gray',
    borderColor: 'green',
    borderRadius: 5,
    width: 60,
  },
});
