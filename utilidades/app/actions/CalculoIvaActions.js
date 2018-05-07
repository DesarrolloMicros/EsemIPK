import * as types from './actionTypes';

import * as fn  from '../helpers/funcionesgenerales';


export const fnCalculoIVA = (CampoResultado, BaseImponible, Iva_Val, IRPF_Val, RecargoEquivalencia_Val, Total) => {   

    var vBaseImponible="0",vTotal="0";

    if (fn.isnull(BaseImponible)) {BaseImponible='0'}
    if (fn.isnull(Total)) {Total='0'}

    if (CampoResultado == 'Total') {//Modificamos BaseImponible
        var num=BaseImponible.indexOf(',').toString();
        if (num != '-1'){
            vBaseImponible=BaseImponible.replace('.','').replace(',','.');
        }else{
            vBaseImponible=BaseImponible;
        }        
        vTotal = parseFloat(vBaseImponible) + (vBaseImponible * Iva_Val / 100) - (vBaseImponible * IRPF_Val / 100) + (vBaseImponible * RecargoEquivalencia_Val / 100);

        Total = fn.Redondear(vTotal, 2);
        Total=isNaN(Total)?'?':fn.FormatoMoneda(Total);
    } else if (CampoResultado == 'BaseImponible') {//Modificamos Total
        var num=Total.indexOf(',').toString();
        if (num != '-1'){
            vTotal=Total.replace('.','').replace(',','.');
        }else{
            vTotal=Total;
        }        
        vBaseImponible = vTotal - (vTotal - (vTotal / (((parseFloat(Iva_Val) + parseFloat(RecargoEquivalencia_Val) - IRPF_Val) / 100) + 1)));

        BaseImponible = fn.Redondear(vBaseImponible, 2);
        BaseImponible=isNaN(BaseImponible)?'?':fn.FormatoMoneda(BaseImponible);
    } else {
        BaseImponible="0";Total="0"; 
    }     

    var num=BaseImponible.indexOf(',').toString();
    if (num != '-1'){
            vBaseImponible=BaseImponible.replace('.','').replace(',','.');
        }else{
            vBaseImponible=BaseImponible;
    }               

    var Iva = fn.FormatoMoneda(vBaseImponible * Iva_Val / 100, 2,'.') + " €";
    var IRPF = fn.FormatoMoneda(vBaseImponible * IRPF_Val / 100, 2,'.') + " €";
    var RecargoEquivalencia= fn.FormatoMoneda(vBaseImponible * RecargoEquivalencia_Val / 100, 2,'.') + " €";      

    return {
        type: types.IVA_CALCULAR,
        data: { CampoResultado, BaseImponible, Iva_Val, Iva, IRPF_Val, IRPF, RecargoEquivalencia_Val, RecargoEquivalencia, Total}
    };

}