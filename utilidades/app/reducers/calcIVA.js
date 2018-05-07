import * as types from '../actions/actionTypes';

const initialState = {
  data : {CampoResultado:'', BaseImponible:0, Iva_Val:21, Iva:0, IRPF_Val:0, IRPF:0, RecargoEquivalencia_Val:0, RecargoEquivalencia:0, Total:0},
  error : false
};

const calcIVA = (state = initialState, action = {}) => {
  
  switch (action.type) {
    case types.IVA_CALCULAR:
      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default calcIVA; 