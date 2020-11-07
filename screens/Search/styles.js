import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  photoSelected:RecipeCard.photoSelected,
  description:RecipeCard.description,
  containerSelected:RecipeCard.containerSelected,
  category: RecipeCard.category,
  IconStyle:{
    position:"absolute",
    left:"110%",
    top:-6
  },
  btnIcon: {
    height: 14,
    width: 14
  }
});

export default styles;
