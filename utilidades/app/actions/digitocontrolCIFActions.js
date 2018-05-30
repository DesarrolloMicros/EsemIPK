import * as types from './actionTypes';

function fnDC(numCIF,letra){
    
        var vNumeros = ["A", "B", "D", "E", "F", "G", "H", "J", "U", "V"];
        var vPasoAletra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        var A = 0;
        var B = 0;
        A = parseFloat(numCIF.charAt(1)) + parseFloat(numCIF.charAt(3)) + parseFloat(numCIF.charAt(5));

        for (i = 0; i <= 6;i = i + 2) {
            var num = parseFloat(numCIF.charAt(i)) * 2;
            if (num > 9) {
                num = Math.floor(num / 10) + num % 10;
            }
            B = B + num;
        }
        var C = A + B;

        C = C % 10;
        C = 10 - C;

        var l = letra.toUpperCase();

        if (vNumeros.indexOf(l) > 0) {
            return C;
        } else {
            return vPasoAletra[C-1];
        }
}

function fnValidarCIF (cif) {
	//Quitamos el primer caracter y el ultimo digito
	var valueCif=cif.substr(1,cif.length-2);
 
	var suma=0;
 
	//Sumamos las cifras pares de la cadena
	for(i=1;i<valueCif.length;i=i+2)
	{
		suma=suma+parseInt(valueCif.substr(i,1));
	}
 
	var suma2=0;
 
	//Sumamos las cifras impares de la cadena
	for(i=0;i<valueCif.length;i=i+2)
	{
		result=parseInt(valueCif.substr(i,1))*2;
		if(String(result).length==1)
		{
			// Un solo caracter
			suma2=suma2+parseInt(result);
		}else{
			// Dos caracteres. Los sumamos...
			suma2=suma2+parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
		}
	}
 
	// Sumamos las dos sumas que hemos realizado
	suma=suma+suma2;
 
	var unidad=String(suma).substr(1,1)
	unidad=10-parseInt(unidad);
 
	var primerCaracter=cif.substr(0,1).toUpperCase();
 
	if(primerCaracter.match(/^[NPQRSW]$/))
	{
		//Empieza por .... Comparamos la ultima letra
		if(String.fromCharCode(64+unidad).toUpperCase()==cif.substr(cif.length-1,1).toUpperCase())
			return true;
	}else if(primerCaracter.match(/^[ABCDEFGHJUV]$/)){
		//Se revisa que el ultimo valor coincida con el calculo
		if(unidad==10)
			unidad=0;
		if(cif.substr(cif.length-1,1)==String(unidad))
			return true;
	}
	return false;
}


export const fnDCCIF = (letra,cif) => {  

    var vIcono='';
    var vColor='';

    var numCIF = cif;
    numCIF = numCIF.replace("/[^0-9]/i", "");

    if (numCIF.length < 7 || letra == "") {
       vIcono='';vColor='';
    } else if (numCIF.length == 8) {
		var CIF_OK =fnValidarCIF(letra+cif);
		if (CIF_OK) {//Correcto            
			vIcono='ios-checkmark'; vColor='green'
		 } else {//Incorrecto            
			vIcono='ios-close'; vColor='red'
		}
    }
  
    return {
        type: types.DIGITO_CONTROL_CIF_CALCULAR,
        data: {icono: vIcono,color:vColor} //Icono y Color que se mostrara
    };

}
