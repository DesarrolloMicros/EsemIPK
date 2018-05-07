import Axios from 'axios';
import creator from './creator';

const API_ENDPOINT = 'http://www.ipartek.com/demo/webApiESEM/api'; //http://172.30.22.48/webApiESEM/api';
const API_SLUG  = 'limites';

let endpoints =  creator(API_ENDPOINT, API_SLUG);

endpoints.getLimites = (importe, FIni, Meses, Voluntario) => Axios.get(`${API_ENDPOINT}/${API_SLUG}?importe=${importe}&FIni=${FIni}&Meses=${Meses}&Voluntario=${Voluntario}`);


export default endpoints;
