import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom:100
     //  flex: 1
    
  },
  carouselContainer: {
    minHeight: 350
  },
 
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 350
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 350
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
   // marginTop:"-20%",
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
   },
  infoContainer: {
    marginBottom:30,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoContainerProg: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   
  },
  Prog: {
  
    margin:5
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 16,
    fontStyle:"italic",
    fontWeight: 'bold',
    margin: 10,
    color: '#81B522'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});

export default styles;
