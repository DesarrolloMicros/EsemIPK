import * as types from './actionTypes';

export const fnLetraDNI = (dni) => {    
    dni = dni.dni;
    var letra = ''
    if (dni.length == 8) {
        cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
        posicion = dni % 23;
        letra = cadena.substring(posicion, posicion + 1);
    }
    return {
        type: types.LETRA_DNI_CALCULAR,
        data: letra
    };
}