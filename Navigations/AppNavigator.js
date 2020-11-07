import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
// import Menu from '../screens/Menu/Menu' 
import Menu from '../screens/Menu/NewPlan' 

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import FirstScreen from '../screens/FirstScreen';
import MenuImage from '../components/MenuImage/MenuImage';
import ProfileScreen from '../screens/Profile/ProfileScreen'
import TabBar from '../components/TabBar/TabBar'
import Header from '../components/Header/Header'
import StepOne from '../screens/Quiz/StepOne';
import StepToo from '../screens/Quiz/StepToo';
import StepThree from '../screens/Quiz/StepThree';
import Quiz from '../screens/Quiz/Quiz';
import StepFive from '../screens/Quiz/Stepfive';



const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen,},
 
    Categories: {screen: CategoriesScreen},
    Profile:{ screen: ProfileScreen}, 
    Menu:{ screen: Menu} ,
 
   
},
{
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarComponent: ({focused}) => <TabBar navigation={navigation} focused={focused} />,
  }), 
  
  tabBarOptions: {
  showLabel : true, 
 
  },
  

}

);

const HomeTabNavigator = createAppContainer(TabNavigator);



const InsideAppNavigator = createStackNavigator({
    Home : {
        screen: HomeTabNavigator,
           navigationOptions : ({navigation}) => ({
            // header:null,
            headerLeft: () => <MenuImage
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        })   
    },
  
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    StepOne: StepOne,
    StepToo: StepToo,
    StepThree: StepThree,
    StepFive: StepFive,
    Profile: ProfileScreen, 
    Quiz: Quiz,
    Menu: Menu
},

);


// SIDE MENU NAVIGATOR
const SideMenuNavigator = createDrawerNavigator(
  { Main : InsideAppNavigator }, 
  { drawerWidth: 250, contentComponent: DrawerContainer }
);


const AppNavigator =  createSwitchNavigator({
  
    Welcome : {
      screen : Quiz,
      navigationOptions: ({ navigation }) => ({
        header:null,
        
      })
    },
    First: FirstScreen,
    login:LoginScreen,
    StepFive: StepFive,
    Home : SideMenuNavigator,
})

export default createAppContainer(AppNavigator);
