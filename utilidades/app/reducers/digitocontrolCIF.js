import * as types from '../actions/actionTypes';

const initialState = {
  data : {icono:'',color:'white'},
  error : false
};

const digitocontrolCIF = (state = initialState, action = {}) => {
  
  switch (action.type) {
    case types.DIGITO_CONTROL_CIF_CALCULAR:  

      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default digitocontrolCIF; 