import axios from 'axios';

export default axios.create({
 baseURL: 'http://192.168.1.113:3001'
  //baseURL: 'http://localhost:3001/'   
}); 


export const TOKEN_KEY = "@ifeventos";