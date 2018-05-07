import * as Types from './actionTypes';

import api from './../api/aplazamientoHFB';
import apiLim from './../api/limitesHFB';

export const get = (importe, FIni, Meses, Voluntario) => dispatch => {
    //console.log('get',importe);
    return  api.getValoresTabla(importe, FIni, Meses, Voluntario)
            .then((response) => dispatch({type : Types.APLAZAMIENTO_HFB__REQUEST_COMPLETED, payload : response}))
            .then((response)=> {
                apiLim.getLimites(importe, FIni, Meses, Voluntario)
                .then((response) => dispatch({type : Types.LIMITES_HFB__REQUEST_COMPLETED, payload: response}))
                .catch((response) => dispatch({type : Types.LIMITES_HFB__REQUEST_FAIL}));
            })
            .catch((response) => dispatch({type : Types.APLAZAMIENTO_HFB__REQUEST_FAIL}));
}