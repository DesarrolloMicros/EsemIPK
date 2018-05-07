import * as types from '../actions/actionTypes';

const initialState = {
  data : 'ES',
  error : false
};

const digitocontrolIBANReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DIGITO_CONTROL_IBAN:
      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default digitocontrolIBANReducer; 