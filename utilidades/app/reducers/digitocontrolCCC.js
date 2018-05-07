import * as types from '../actions/actionTypes';

const initialState = {
  data : '',
  error : false
};

const digitocontrolCCCReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DIGITO_CONTROL_CCC_CALCULAR:
      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default digitocontrolCCCReducer; 