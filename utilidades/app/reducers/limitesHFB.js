import * as types from '../actions/actionTypes';

const initialState = {
  data : [],
  error : false
};

const limitesHFBreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LIMITES_HFB__REQUEST_COMPLETED:
      return {
                data : action.payload.data,
                error : false
            };
    case types.LIMITES_HFB__REQUEST_FAIL:
      return {
                data : [],
                error : true
            };
    default:
      return state;
  }
}

export default limitesHFBreducer; 