import axios from '../../../../Utils/api'
import {GET_MEALS} from "../constants/action-types";
/***************CommentsGROUP***************/
export const getMeals = () => {
  return (dispatch) => {
    return axios.get('/meals/getMeals').then(({ data }) => {     
        if (data) {
          dispatch({ type: GET_MEALS, payload: data.data });
        } else {
          // console.log("Error****:", error.message);
        }
      }).catch(function (error) {

        //console.log("Error****:", error.message);
      });
  }
}
 


