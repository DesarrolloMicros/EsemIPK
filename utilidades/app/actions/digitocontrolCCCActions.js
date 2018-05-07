import * as types from './actionTypes';

import * as fn  from '../helpers/funcionesgenerales';


export const fnDCCCC = (Entidad, Sucursal, NumCuenta) => {   

    if (fn.isnull(Entidad) || fn.isnull(Sucursal) || fn.isnull(NumCuenta)) {
        DC=" "; 
    }else if (Entidad.length == 4 && Sucursal.length == 4 && NumCuenta.length == 10) {
        var concatenado = Entidad + Sucursal;
        var dc1 = fn.calculaDCParcial(concatenado);
        var dc2 = fn.calculaDCParcial(NumCuenta);
        DC=dc1 + dc2;
    } else {
        DC=" ";
    }
    
    return {
        type: types.DIGITO_CONTROL_CCC_CALCULAR,
        data: DC
    };
}