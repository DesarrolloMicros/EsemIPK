export const redondear = (number, precision) => {
    //console.log('redondear');
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

export const isLetter =(str) => {
  return str.length === 1 && str.match(/[a-z]/i);
}

export const isNumeric =(num) =>{
  return Number(parseFloat(num))==num;
}

export const FormatoMoneda=(value, decimals, separators) =>{
    if (!(typeof value === "undefined" || isNaN(parseInt(value)) || value === null || value === '' || value == '')){
        value=value.toString().replace(',','.');
    }    
    decimals = decimals >= 0 ? parseInt(decimals, 0) : 2;
    //separators = separators || ['.', "'", ','];
    separators = separators || ['.', ".", ','];
    var number = (parseFloat(value) || 0).toFixed(decimals);
    if (number.length <= (4 + decimals))
        return number.replace('.', separators[separators.length - 1]);
    var parts = number.split(/[-.]/);
    value = parts[parts.length > 1 ? parts.length - 2 : 0];
    var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
        separators[separators.length - 1] + parts[parts.length - 1] : '');
    var start = value.length - 6;
    var idx = 0;
    while (start > -3) {
        result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
            + separators[idx] + result;
        idx = (++idx) % 2;
        start -= 3;
    }
    return (parts.length == 3 ? '-' : '') + result.replace('undefined','.');
}

export const Redondear = (number, precision) => {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

export const isnull = (value) => {
     return (typeof value === "undefined" || value === null || value === '' || value == '');
}

export const damePesoIBAN=(letra)=> {
    var peso = "";
    letra = letra.toUpperCase();
    switch (letra) {
        case 'A':
            peso = "10";
            break;
        case 'B':
            peso = "11";
            break;
        case 'C':
            peso = "12";
            break;
        case 'D':
            peso = "13";
            break;
        case 'E':
            peso = "14";
            break;
        case 'F':
            peso = "15";
            break;
        case 'G':
            peso = "16";
            break;
        case 'H':
            peso = "17";
            break;
        case 'I':
            peso = "18";
            break;
        case 'J':
            peso = "19";
            break;
        case 'K':
            peso = "20";
            break;
        case 'L':
            peso = "21";
            break;
        case 'M':
            peso = "22";
            break;
        case 'N':
            peso = "23";
            break;
        case 'O':
            peso = "24";
            break;
        case 'P':
            peso = "25";
            break;
        case 'Q':
            peso = "26";
            break;
        case 'R':
            peso = "27";
            break;
        case 'S':
            peso = "28";
            break;
        case 'T':
            peso = "29";
            break;
        case 'U':
            peso = "30";
            break;
        case 'V':
            peso = "31";
            break;
        case 'W':
            peso = "32";
            break;
        case 'X':
            peso = "33";
            break;
        case 'Y':
            peso = "34";
            break;
        case 'Z':
            peso = "35";
            break;
    }
    return peso;
}


export const modulo = (preIban, divisor)=> {

    var resto = 0;
    for (var i = 0; i < preIban.length; i += 10) {
        var dividendo = resto + "" + preIban.substr(i, 10);
        resto = dividendo % divisor;
    }

    return resto;
}

export const rellenaCeros =(numero, longitud) => {
    var ceros = '';
    var i;
    numero = numero.toString();
    for (i = 0; (longitud - numero.length) > i; i++) {
        ceros += '0';
    }
    return ceros + numero;
}

export const calculaDCParcial=(cadena)=> {
    var dcParcial = 0;
    var tablaPesos = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    var suma = 0;
    var i;
    for (i = 0; i < cadena.length; i++) {
        suma = suma + cadena.charAt(cadena.length - 1 - i) * tablaPesos[i];
    }
    dcParcial = (11 - (suma % 11));
    if (dcParcial == 11)
        dcParcial = 0;
    else if (dcParcial == 10)
        dcParcial = 1;
    return dcParcial.toString();
}

export const calculateTotalMonthsDifference = (firstDate, secondDate) => { var fm = firstDate.getMonth(); var fy = firstDate.getFullYear(); var sm = secondDate.getMonth(); var sy = secondDate.getFullYear(); var months = Math.abs(((fy - sy) * 12) + fm - sm); var firstBefore = firstDate > secondDate; firstDate.setFullYear(sy); firstDate.setMonth(sm); firstBefore ? firstDate < secondDate ? months-- : "" : secondDate < firstDate ? months-- : ""; return months; } 

export const cvDate = (str1) => {
    if (str1.length < 10) { str1 = '0' + str1 }
    var dt1 = '01'; //parseInt(str1.substring(0, 2));
    var mon1 = parseInt(str1.substring(3, 5));
    var yr1 = parseInt(str1.substring(6, 10));
    var date1 = new Date(yr1, mon1 - 1, dt1);
    return date1;
}
