import * as types from '../actions/actionTypes';

const initialState = {
  data : {},
  error : false
};

const calcprestamoreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.PAGO_PRESTAMO:
      return {
                data : action.data,
                error : false
            };
    default:
      return state;
  }
}

export default calcprestamoreducer; 