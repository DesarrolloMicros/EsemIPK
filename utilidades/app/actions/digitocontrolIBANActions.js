import * as types from './actionTypes';

import * as fn  from '../helpers/funcionesgenerales';


export const fnDCIBAN = (Entidad, Sucursal, DC, NumCuenta) => {  

     CodIBAN="ES";  
    
    if (Entidad.length == 4 && Sucursal.length == 4 && DC.length == 2 && NumCuenta.length == 10) {
        var preIban = Entidad +
                      Sucursal +
                      DC +
                      NumCuenta +
                      fn.damePesoIBAN('E') +
                      fn.damePesoIBAN('S') +
                      "00";                      
        var dcIban = 98 - fn.modulo(preIban, 97);
        dcIban = fn.rellenaCeros(dcIban, 2);
        CodIBAN= CodIBAN + dcIban;
    } 
    
    return {
        type: types.DIGITO_CONTROL_IBAN,
        data: CodIBAN
    };
}