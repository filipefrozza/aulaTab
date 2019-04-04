import axios from 'axios';

export default axios.create({
    baseURL: `http://192.168.15.2:3000/api/v1/`,
    timeout: 1000
});