import axios from "axios";


const config = {
    baseURL: `http://ergast.com/api/f1/`,
}
const api = axios.create(config);

export default api;