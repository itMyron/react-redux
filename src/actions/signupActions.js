//import axios from "axios";
import API from '../api'

export const userSignupRequest = (userData) => {
    return dispatch => {
        return API.postMD5();
        //return axios.post('/api/users', userData);
    }
};