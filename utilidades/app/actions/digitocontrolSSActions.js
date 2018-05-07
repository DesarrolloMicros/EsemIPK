import * as types from './actionTypes';

export const fnDC = (numSS) => {    
    
    var DC = ''
    numSS = numSS.replace("/[^0-9]/i", "");

    if (numSS.length < 9) {
        DC='';
    } else {
        
        var dc = numSS % 97;

        if (dc.toString().length < 2) {
            dc = '0' + dc.toString();
        }
         DC=dc;
    }
    
    return {
        type: types.DIGITO_CONTROL_SEGURIDAD_SOCIAL_CALCULAR,
        data: DC
    };
}