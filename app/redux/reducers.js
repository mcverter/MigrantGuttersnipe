import { combineReducers } from 'redux';

import { RECEIVE_ALL_SHAREABLES, REQUEST_ALL_SHAREABLES } from './actions';

/*
const regionsReducer = (
  state = {
    isFetching: false,
    regions: [],
  },
  action,
) => {
  switch (action.type) {
    case RECEIVE_ALL_SHAREABLES:
      return {
        ...state,
        isFetching: false,
        regions: action.regions,
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
*/
const rootReducer = combineReducers({
  // shareablesReducer,
});

export default rootReducer;
