import * as types from '../actions/actionTypes';

const initialState = {
  data : [],
  error : false
};

const aplazamientoHFBreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.APLAZAMIENTO_HFB__REQUEST_COMPLETED:
      return {
                data : action.payload.data,
                error : false
            };
    case types.APLAZAMIENTO_HFB__REQUEST_FAIL:
      return {
                data : [],
                error : true
            };
    default:
      return state;
  }
}

export default aplazamientoHFBreducer; 