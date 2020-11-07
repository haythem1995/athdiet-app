import axios from 'axios';
export default axios.create({
  baseURL: `https://athdiet.api.expert-business-solutions.com/`,
   //baseURL: `http://192.168.1.15:3000/users/`,
// baseURL: `https://dev.api.coursaucarre.com/api/`,

  headers: {
    'Content-Type': 'application/json ',
  }
});
