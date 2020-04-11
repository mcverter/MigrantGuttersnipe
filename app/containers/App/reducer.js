/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { shareablesByKey, shareablesByRegion } from '../../data/index';
import {RECEIVE_ALL_DATA, REQUEST_ALL_DATA} from '../../redux/actions'
export const initialState = {
  shareablesByKey,
  shareablesByRegion,
};

/* eslint-disable default-case, no-param-reassign */
const AppReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case RECEIVE_ALL_DATA:
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
  });

export default AppReducer;
