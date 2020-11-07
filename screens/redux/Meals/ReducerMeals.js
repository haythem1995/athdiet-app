import { GET_MEALS} from "./constants/action-types";
const initialState = {
  meals: [],
 

};
export default (state = initialState, action) => {

  switch (action.type) {
    case GET_MEALS: {
      return {
        ...state,
        meals: action.payload,

      }
    }
 
    
    default:
      return state;
  }

}
