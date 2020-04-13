import initialState from './initialState';
import {
  RECEIVE_ALL_DATA,
  REQUEST_ALL_DATA
} from '../actions/global';
import {
  RECEIVE_REGION,
  REQUEST_REGION
} from '../actions/regions';
import {
  RECEIVE_SINGLE_SHAREABLE,
  REQUEST_SINGLE_SHAREABLE
} from '../actions/shareables';

export default function app(
  state = initialState, action) {
  console.log('state', state)
  switch (action.type) {
    case RECEIVE_SINGLE_SHAREABLE:
      const shareable = action.shareable
      return {
        ...state,
        currentShareable: shareable,
        cachedShareables: {
          ...state.cachedShareables,
          [shareable['id']]: shareable
        }
      }
    case RECEIVE_REGION: {
      const region = action.region;
      const additionalShareables = region.shareables.reduce((acc, curr)=>{
        return {...acc, [curr.id]: curr}}, {})

      return {
        ...state,
        currentRegion: region,
        cachedRegions: {
          ...state.cachedRegions,
          [region[name]]: region
        },
        cachedShareables: {
          ...state.cachedShareables,
          ...additionalShareables
        }
      }
    }
    case RECEIVE_ALL_DATA:
      return {
        ...state,
        isFetching: false,
        cachedRegions: action.regions,
        cachedShareables: action.shareables.reduce((acc, curr)=>{
          return {...acc, [curr.id]: curr}}, {})
      };
    case REQUEST_ALL_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_REGION:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SINGLE_SHAREABLE:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
}
