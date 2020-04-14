import initialState from './initialState';
import {
  RECEIVE_ALL_DATA,
  REQUEST_ALL_DATA
} from '../actions/globalActions';
import {
  RECEIVE_REGION,
  REQUEST_REGION
} from '../actions/regionActions';
import {
  RECEIVE_SINGLE_SHAREABLE,
  REQUEST_SINGLE_SHAREABLE
} from '../actions/shareableActions';

function extractShareablesFromSingleRegion(region) {
  return region.shareables;
}

// can replace with a functional Object.entries.reduce[]
function extractShareablesFromMultipleRegions(manyRegions) {
  let shareables = [];
  for (let region in manyRegions) {
    shareables = [...shareables, ...manyRegions[region].shareables]
  }
  return shareables;
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SINGLE_SHAREABLE:
      const shareable = action.shareable;
      return {
        ...state,
        currentShareable: shareable,
        cachedShareables: {
          ...state.cachedShareables,
          [shareable['id']]: shareable
        }
      }

    case RECEIVE_REGION: {
      const region = action.data;
      if (!region || ! region.shareables) {
        return state;
      }

      const additionalShareables = region.shareables.reduce((acc, curr)=>{
        return {...acc, [curr.id]: curr}}, {})

      console.log('receive region', region)
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
        cachedShareables: extractShareablesFromMultipleRegions(action.regions)
          .reduce((acc, curr)=>{
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
