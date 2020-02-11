/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { shareablesByKey, shareablesByRegion } from '../../data/index';

export const initialState = {
  shareablesByKey,
  shareablesByRegion,
};

/* eslint-disable default-case, no-param-reassign */
const AppReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      default:
        return state;
    }
  });

export default AppReducer;
