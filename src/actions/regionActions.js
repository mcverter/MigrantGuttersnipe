import { SERVER_URL } from '../../config';
import axios from 'axios';

export const REQUEST_REGION = 'REQUEST_REGION';
export const RECEIVE_REGION = 'RECEIVE_REGION';

const REGION_URL = `${SERVER_URL}/region`;

export const requestRegion = () => ({
  type: REQUEST_REGION,
});

export const recieveRegion = json => ({
  type: RECEIVE_REGION,
  data: json,
});

export const fetchRegion = (id) => dispatch => {
  dispatch(requestRegion());
  return axios.get(`${REGION_URL}/${id}`)
    .then(region => {
      console.log(region.data)
      debugger;
      dispatch(recieveRegion(region.data));
    });
};

export const loadRegion = (regionName) => {
  return (dispatch, getState) => {
    if (! getState().app.cachedRegions[regionName]) {
      return dispatch(fetchRegion(regionName));
    } else {
      return dispatch(recieveRegion(regionName));
    }
  }
}

