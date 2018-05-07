import * as types from '../actions/actionTypes';

const initialState = {
  data : '',
  error : false
};

const letradniReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LETRA_DNI_CALCULAR:
      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default letradniReducer; 