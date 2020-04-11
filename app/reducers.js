/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import AppReducer from 'containers/App/reducer';
// import { shareablesByKey, shareablesByRegion } from './data/index';
import {
  RECEIVE_ALL_SHAREABLES,
  REQUEST_ALL_SHAREABLES,
  RECEIVE_ALL_REGIONS,
  REQUEST_ALL_REGIONS,
  RECEIVE_ALL_DATA,
  REQUEST_ALL_DATA
} from './redux/actions';

const app = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_DATA:
      console.log('data', action)
      return {
        ...state,
        isFetching: false,
        regions: action.data.regions,
        shareables: action.data.shareables
      };
    case REQUEST_ALL_DATA:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
}



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
const regionsReducer = (
  state = {
    isFetching: false,
    regions: [],
  },
  action,
) => {
  switch (action.type) {
    case RECEIVE_ALL_REGIONS:
      return {
        ...state,
        isFetching: false,
        regions: action.regions,
      };
    case REQUEST_ALL_REGIONS:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    shareablesReducer,
    regionsReducer,
    app,
    language: languageProviderReducer,
    router: connectRouter(history),
    App: AppReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
