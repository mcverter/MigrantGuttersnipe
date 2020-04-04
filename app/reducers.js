/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import AppReducer from 'containers/App/reducer';
// import { shareablesByKey, shareablesByRegion } from './data/index';
import {RECEIVE_ALL_SHAREABLES, REQUEST_ALL_SHAREABLES} from "./redux/actions";
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

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    shareablesReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    App: AppReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
