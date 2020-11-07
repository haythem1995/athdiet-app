
import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/Profile/ProfileScreen'
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import { Text, View } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import weeksPlan from '../screens/Menu/weeksPlan';
import Menu from '../screens/Menu/Menu';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import Parametre from '../screens/Parametres/index'
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import Quiz from "../screens/Quiz/Quiz";
import SignUpScreen from "../screens/SignUpScreen";
import TabNavigator from "./TabNavigator";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import LoginScreen from "../screens/LoginScreen";
import Objectif from '../screens/Parametres/Objectifs'
import Profile from '../screens/Parametres/Profile'
import Rappel from '../screens/Parametres/Rappel';
import Filter from '../screens/Search/Filter'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};



function MenuHeader() {
  return (
    <View style={{ width: "140%", backgroundColor: '#8CBD3E', marginLeft: -75 }}>
      <Svg
        height="80"
        width="200%"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: 50, marginLeft: -197 }}
      >
        <Path fill="#8CBD3E" fill-opacity="-1" d="M0,224L80,234.7C160,245,320,267,480,277.3C640,288,800,288,960,277.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </Svg>
      <Text style={{ margin: 20, top: 30, fontSize: 24, color: "white", textAlign: "center", }} >Plan de la semaine</Text>

    </View>
  );
}


const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator >


      
      <Stack.Screen name="Acceuil" component={TabNavigator} navigation={navigation} />
    </Stack.Navigator>
  );
}


const SearchStack = createStackNavigator();
const SearchStackNavigator = ({ navigation }) => {

  return (
    <SearchStack.Navigator >
      <SearchStack.Screen name="Search"
        component={SearchScreen } 
        navigation={navigation}  
        options={{
         
          headerShown:false,
         
        }}

      />
        <SearchStack.Screen name="Filter" component={Filter}
        options={
          
          ({ route }) => ({ title: "Filter",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("presseed")}
             
             >
               <Text style={{fontWeight:"600",marginRight:15,fontSize:18,color:"grey" 
              }}> 
                Effacer tous
               </Text>
               </TouchableOpacity>
          )
        
        })} 
        
        
        />
      <SearchStack.Screen name="Recipe" component={RecipeScreen}
        options={({ route }) => ({ 
          
          title: route.params.item.title })}   />
      <SearchStack.Screen name="Ingredient" component={IngredientScreen}
        options={({ route }) => ({ title: route.params.name })} />
      <SearchStack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </SearchStack.Navigator>
  );
}


const ParametreStack = createStackNavigator();
const ParametreStackNavigator = ({ navigation }) => {

  return (
    <ParametreStack.Navigator >
      <ParametreStack.Screen name="Parametre"
        component={Parametre } 
        navigation={navigation}  
        options={{
         
          headerShown:false,
         
        }}

      />
    <SearchStack.Screen name="Profile" component={Profile}
        options={({ route }) => ({ title: "Profile" })} />
            <SearchStack.Screen name="Objectif" component={Objectif}
        options={({ route }) => ({ title: "Mes Objectifs" })} />
                    <SearchStack.Screen name="Rappels" component={Rappel}
        options={({ route }) => ({ title: "Rappels" })} />
      {/* <SearchStack.Screen name="Ingredient" component={IngredientScreen}
        options={({ route }) => ({ title: route.params.name })} />
      <SearchStack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      /> */}
    </ParametreStack.Navigator>
  );
}

const MenusStack = createStackNavigator();
const MenuStackNavigator = ({ navigation,route }) => {
  return (
    <MenusStack.Navigator >
      {/* <MenusStack.Screen name="Menu"
        component={weeksPlan}
        navigation={navigation}
        
        options={{
          headerTitle: props => <MenuHeader {...props} />,

        }}
      /> */}
      <MenusStack.Screen name="Plan" options={{
        headerShown: false

      }} component={Menu} navigation={navigation} route={route}/>
        <SearchStack.Screen name="Search"
        component={SearchScreen } 
        navigation={navigation}   
        options={{
         
          headerShown:false
        }}

      />
       <SearchStack.Screen name="Filter" component={Filter}
        options={
          
          ({ route }) => ({ title: "Filter",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("presseed")} 
             
             >
               <Text style={{fontWeight:"600",marginRight:15,fontSize:18,color:"grey" 
              }}> 
                Effacer tous
               </Text>
               </TouchableOpacity>
          )
        
        })} 
        
        
        />
       <SearchStack.Screen name="Recipe" component={RecipeScreen}
        options={({ route }) => ({ title: route.params.item.title })} />
      <SearchStack.Screen name="Ingredient" component={IngredientScreen}
        options={({ route }) => ({ title: route.params.name })} />
      <SearchStack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' , headerShown:false, }} />
    </MenusStack.Navigator>
  );
}
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' , headerShown:false, }} />
      <Stack.Screen name="Recipe" component={RecipeScreen}
        options={({ route }) => ({ 
          
          title: route.params.item.title })}   />
                <Stack.Screen name="Ingredient" component={IngredientScreen}
        options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export { ParametreStackNavigator,MainStackNavigator, ProfileStackNavigator, SearchStackNavigator, MenuStackNavigator };