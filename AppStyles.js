import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 1;

// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

export const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#ff5a66",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#81B522",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    google:"white",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe",
    // green:"linear-gradient(#8CBD3E,#5CA953 )",
    primary:"#81B522",
    gray:"#D2D6C8"
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },

};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN-15,
    marginBottom:25,
    width: (SCREEN_WIDTH - (recipeNumColums + 10) * RECIPE_ITEM_MARGIN) / recipeNumColums - SCREEN_WIDTH/200,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor:'white'
  },
  containerSelected: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN-15,
      marginBottom:25,
    width: SCREEN_WIDTH-30 ,
    height: RECIPE_ITEM_HEIGHT + 120,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor:'white'
  },
  photo: {
    marginTop:2,
    width: (SCREEN_WIDTH - (recipeNumColums + 10) * RECIPE_ITEM_MARGIN) / recipeNumColums - SCREEN_WIDTH/40,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  photoSelected: {
    width:  SCREEN_WIDTH-30,
    height: RECIPE_ITEM_HEIGHT+10,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  description: {
    fontSize: 12,    
    color: 'gray',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});
