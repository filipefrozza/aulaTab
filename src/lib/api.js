import axios from 'axios';

export default axios.create({
    baseURL: `http://10.0.0.229:3000/api/v1/`,
    timeout: 1000
});