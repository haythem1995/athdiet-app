import axios from '../../../util/Api';
import {GET_SPECIALIESWITHLEVEL,GET_SPECIALIES ,GET_CATEGORIES,GET_LEVELS} from "../constants/action-types";
/***************CommentsGROUP***************/
export const getSpecialities = () => {
  return (dispatch) => {
    return axios.get('/Speciality').then(({ data }) => {     
        if (data) {
          dispatch({ type: GET_SPECIALIES, payload: data });
        } else {
          // console.log("Error****:", error.message);
        }
      }).catch(function (error) {

        //console.log("Error****:", error.message);
      });
  }
}
export const getSpecialtywithLevels= () => {
  return (dispatch) => {
    axios.get('Speciality/GetSpecialtywithLevels').then(({ data }) => {   
      // console.log("cest data " , data)  
        if (data) {
          dispatch({ type: GET_SPECIALIESWITHLEVEL, payload: data });
        } else {
          // console.log("Error****:", error.message);
        }
      }).catch(function (error) {

        //console.log("Error****:", error.message);
      });
  }
}
export const getCategories = () => {
  return (dispatch) => {
    axios.get('Category').then(({ data }) => {     
        if (data) {
          dispatch({ type: GET_CATEGORIES, payload: data });
        } else {
          // console.log("Error****:", error.message);
        }
      }).catch(function (error) {

        //console.log("Error****:", error.message);
      });
  }
}
export const getLevels = () => {
  return (dispatch) => {
    axios.get('Level').then(({ data }) => {     
        if (data) {
          dispatch({ type: GET_LEVELS, payload: data });
        } else {
          // console.log("Error****:", error.message);
        }
      }).catch(function (error) {

        //console.log("Error****:", error.message);
      });
  }
}



