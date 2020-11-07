import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import Quiz from "../screens/Quiz/Quiz";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from '../screens/Home/HomeScreen'

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigator = ({ navigation }) => {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Categories" component={CategoriesScreen} />
    //   <Drawer.Screen name="Recipe" component={RecipeScreen} />
    //   <Drawer.Screen name="RecipesList" component={RecipesListScreen} />
    //   <Drawer.Screen name="Ingredient" component={IngredientScreen} />
    //   <Drawer.Screen name="IngredientDetails" component={IngredientsDetailsScreen} />
    // </Drawer.Navigator>
    //   <Drawer.Navigator>
    //   <Drawer.Screen name="Home" component={TabNavigator} />
    //   {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    // </Drawer.Navigator>
    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Acceuil" component={TabNavigator} navigation={navigation} />


    </Stack.Navigator>
  );
}

export default DrawerNavigator;