import axios from "axios";


const config = {
    baseURL: `https://ergast.com/api/f1/`,
}
const api = axios.create(config);

export default api;