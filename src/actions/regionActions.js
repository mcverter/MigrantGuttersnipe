import { SERVER_URL } from '../../config';

export const REQUEST_REGION = 'REQUEST_REGION';
export const RECEIVE_REGION = 'RECEIVE_REGION';
export const LOAD_REGION_COORDINATES = 'LOAD_REGION_COORDINATES';

const REGION_URL = `${SERVER_URL}/region`;

export const requestRegion = () => ({
  type: REQUEST_REGION,
});

export const recieveRegion = json => ({
  type: RECEIVE_REGION,
  data: json,
});

export const fetchRegion = () => dispatch => {
  dispatch(requestRegion());
  return fetch(REGION_URL)
    .then(response => response.json())
    .then(region => {
      dispatch(recieveRegion(region));
    });
};

export const loadRegion = (regionName) => {
  return (dispatch, getState) => {
    if (! getState().regionsCache[regionName]) {
      return dispatch(fetchRegion(regionName));
    } else {
      return dispatch(recieveRegion(regionName));
    }
  }
}

