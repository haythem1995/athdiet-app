import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  Animated,
} from 'react-native';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
  getRecipes,
} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import ListIngrediant from '../RecipesList/RecipesListScreen';
 
const {width: viewportWidth} = Dimensions.get('window');
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      iscalendervisible: false,
      startValue: new Animated.Value(0),
      topPosition: new Animated.Value(-20),

      endValue: 1,
      duration: 2500,
    };
    this.animatedHeight = new Animated.Value(-20);

  }
 
  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }
  renderImage = ({item}) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item}} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', {ingredient, name});
  };

  showDatePicker = (item) => {
    if(this.props.route.params.route.time!==undefined)
    this.props.navigation.navigate('Plan');
else 
    this.setState({iscalendervisible: true, item: item});
  };
  hideDatePicker = () => {
    this.setState({iscalendervisible: false});
  };
  _handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      Animated.timing(this.animatedHeight, {
        toValue: -20,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    } else
      Animated.timing(this.animatedHeight, {
        toValue: -240,
        duration: 1000,
        useNativeDriver: false,
      }).start();
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
    const {activeSlide} = this.state;

    const item = this.props.route.params.item;
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);
     return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
         <ScrollView
          onScroll={this._handleScroll}
          onScrollAnimationEnd={this._handleScroll}
          style={styles.container}>
          <View style={styles.carouselContainer}>
            <View style={styles.carousel}>
              <Carousel
                ref={(c) => {
                  this.slider1Ref = c;
                }}
                data={item.photosArray}
                renderItem={this.renderImage}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                firstItem={0}
                loop={false}
                autoplay={false}
                autoplayDelay={2000}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
              />
              <Pagination
                dotsLength={item.photosArray.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotColor="rgba(255, 255, 255, 0.92)"
                dotStyle={styles.paginationDot}
                inactiveDotColor="white"
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this.slider1Ref}
                tappableDots={!!this.slider1Ref}
              />
            </View>
          </View>
          <Animated.View
            style={{
              alignItems: 'center',
              backgroundColor: 'red',
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
              justifyContent: 'flex-start',
              marginVertical: 10,
              width: '100%',
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 10,
              padding: 10,
              elevation: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              marginTop: this.animatedHeight,
            }}>
            <Text style={styles.infoRecipeName}>{item.title}</Text>
            <View>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate('RecipesList', {category, title})
                }>
                <Text style={styles.category}>
                  {getCategoryName(item.categoryId).toUpperCase()}
                </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.infoContainerProg}>
              <ProgressCircle
                percent={50}
                radius={40}
                borderWidth={2}
                color="red"
                shadowColor="#ccc"
                bgColor="#fff"
                outerCircleStyle={styles.Prog}>
                <Text style={{fontSize: 14}}>{'kcal'}</Text>
                <Text style={{fontSize: 14}}>50</Text>
              </ProgressCircle>
              <ProgressCircle
                percent={20}
                radius={40}
                borderWidth={2}
                color="green"
                shadowColor="#ccc"
                bgColor="#fff"
                outerCircleStyle={styles.Prog}>
                <Text style={{fontSize: 14}}>{'Carbs'}</Text>
                <Text style={{fontSize: 14}}>{'20%'}</Text>
              </ProgressCircle>
              <ProgressCircle
                percent={30}
                radius={40}
                borderWidth={2}
                color="#3399FF"
                shadowColor="#ccc"
                bgColor="#fff"
                outerCircleStyle={styles.Prog}>
                <Text style={{fontSize: 14}}>{'Proteins'}</Text>
                <Text style={{fontSize: 14}}>{'30%'}</Text>
              </ProgressCircle>
              <ProgressCircle
                percent={30}
                radius={40}
                borderWidth={2}
                color="orange"
                shadowColor="#ccc"
                bgColor="#fff"
                outerCircleStyle={styles.Prog}>
                <Text style={{fontSize: 14}}>{'Fats'}</Text>
                <Text style={{fontSize: 14}}>{'30%'}</Text>
              </ProgressCircle>
            </View>
            {/* 
            <View style={styles.infoContainer}>
              <ViewIngredientsButton
                name={"Voir détails"}
                onPress={() => {
                  let ingredients = item.ingredients;
                  let title = 'Ingredients for ' + item.title;
                  this.props.navigation.navigate('IngredientsDetails', { ingredients, title });

                }}
              />
            </View> */}

            <View
              style={{
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                margin: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Ingrédients
                <Text style={{fontWeight: 'bold', fontSize: 16, color: 'grey'}}>
                  {' '}
                  (20 serves)
                </Text>
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                maxHeight: 150,
              }}>
              <ListIngrediant />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoDescriptionRecipe}>
                {item.description}
              </Text>
            </View>
          </Animated.View>
        </ScrollView>
       
          <AnimatedTouchable
            style={{
              width: '90%',
              alignSelf: 'center',
              borderWidth: 3,
              borderRadius: 40,
              marginLeft: '5%',
              backgroundColor: '#81B522',
              borderColor: '#81B522',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 50,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              opacity: this.state.startValue,

             }}
            onPress={() => {
              this.showDatePicker(item);
            }}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={35}
              color="white"
            />

            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Ajouter
            </Text>
          </AnimatedTouchable>
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
      </View>
    );
  }
}
