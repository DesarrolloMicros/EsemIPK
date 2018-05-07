import * as letradni from './letradniActions';
import * as calcprestamos from './calcprestamosActions';
import * as aplazamientoHFBA from './aplazamientoHFBActions'
import * as digitocontrolSS from './digitocontrolSSActions';
import * as digitocontrolCCC from './digitocontrolCCCActions';
import * as digitocontrolCIF from './digitocontrolCIFActions';
import * as digitocontrolIBAN from './digitocontrolIBANActions';
import * as calcIva from './CalculoIvaActions';

export default {
    fnLetraDNI : letradni.fnLetraDNI,
    fnCalcPagoPrestamo: calcprestamos.fnCalcPagoPrestamo,
    getAplazamientoHFBA: aplazamientoHFBA.get,
    fnDC: digitocontrolSS.fnDC,
    fnDCCCC: digitocontrolCCC.fnDCCCC,
    fnDCCIF: digitocontrolCIF.fnDCCIF,
    fnDCIBAN: digitocontrolIBAN.fnDCIBAN,
    fnCalculoIVA:calcIva.fnCalculoIVA
}