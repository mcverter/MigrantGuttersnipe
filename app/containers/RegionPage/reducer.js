/*
 *
 * RegionPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux'
import tapachulaData from '../Tapachula/tapachula'

export const initialState = {};
 console.log('foo')
/* eslint-disable default-case, no-param-reassign */
const regionPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOCATION_CHANGE:
        const pathname = action.payload.location.pathname;
        console.log(action.payload.location.pathname);
        if (pathname.toLowerCase().slice(1) === 'tapachula') {

        }
        debugger;
        break;
    }
  });

export default regionPageReducer;
