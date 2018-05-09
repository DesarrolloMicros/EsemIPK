import * as types from './actionTypes';
import {redondear} from '../helpers/funcionesgenerales';


export const fnCalcPagoPrestamo = (importe, interes, plazo, n) => {    
    datos ={
        importe:'',
        interes:'',
        plazo:'',
        cmensual: '',
        interestotal: '',
        pagostotal: ''
    };

    // GP00: 24/04/2018
    importe =(importe ||'').replace(',','.');
    interes = (interes ||'').replace(',','.');
    plazo = (plazo ||'').replace(',','.');

    datos["importe"] = importe;
    datos["interes"] = interes;
    datos["plazo"] = plazo;

    if (importe !== '' && interes !== '' && plazo !== ''){

        var t = plazo * n;
        var z = 1 / (1 + (interes/100) / 12);
        var div = 1 - Math.pow(z, t);
        var a = (importe * (1 - z)) / (z * div);       
      
        datos["cmensual"] = redondear((importe * (1 - z)) / (z * div), 2);              
        datos["pagostotal"] = redondear(datos["cmensual"] * t, 2);
        datos["interestotal"] = redondear(datos["pagostotal"] - importe, 2);
    }
    return {
        type: types.PAGO_PRESTAMO,
        data: datos
    };
}