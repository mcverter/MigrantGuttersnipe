import { combineReducers } from 'redux';

import { RECEIVE_ALL_SHAREABLES, REQUEST_ALL_SHAREABLES } from './actions';

const shareablesReducer = (
  state = {
    isFetching: false,
    shareables: [],
  },
  action,
) => {
  switch (action.type) {
    case RECEIVE_ALL_SHAREABLES:
      return {
        ...state,
        isFetching: false,
        shareables: action.shareables,
      };
    case REQUEST_ALL_SHAREABLES:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  shareablesReducer,
});

export default rootReducer;
