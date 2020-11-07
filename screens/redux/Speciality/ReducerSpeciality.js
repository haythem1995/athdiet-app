import { GET_SPECIALIES, GET_CATEGORIES,GET_LEVELS ,GET_SPECIALIESWITHLEVEL} from "./constants/action-types";
const initialState = {
  specialities: [],
  categories: [],
  levels:[],
  specialitieslevels:[]

};
export default (state = initialState, action) => {

  switch (action.type) {
    case GET_SPECIALIES: {
      return {
        ...state,
        specialities: action.payload,

      }
    }
    case GET_SPECIALIESWITHLEVEL: {
      return {
        ...state,
        specialitieslevels: action.payload,
       
      }
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
       
      }
    }
    case GET_LEVELS: {
      return {
        ...state,
        levels: action.payload,       
      }
    }
    
    default:
      return state;
  }

}
