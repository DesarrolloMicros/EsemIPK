//import Promise from 'es6-promise/auto';
import Axios from 'axios';

export default  (API_ENDPOINT, API_SLUG) => {
    return {
        get : () => Axios.get(`${API_ENDPOINT}/${API_SLUG}`),
        getById : (id) => Axios.get(`${API_ENDPOINT}/${API_SLUG}/${id}`),
        post : (data) => Axios.post(`${API_ENDPOINT}/${API_SLUG}`, data),
        put : (id, data) => Axios.put(`${API_ENDPOINT}/${API_SLUG}/${id}`, data),
        remove  : (id) => Axios.delete(`${API_ENDPOINT}/${API_SLUG}/${id}`)
    }
}