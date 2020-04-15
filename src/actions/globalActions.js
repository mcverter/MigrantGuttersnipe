import axios from 'axios';
import { SERVER_URL } from '../../config';

export const REQUEST_ALL_DATA = 'REQUEST_ALL_DATA';
export const RECEIVE_ALL_DATA = 'RECEIVE_ALL_DATA';

const ALL_DATA_URL = `${SERVER_URL}`;

export const requestAllData = () => ({
  type: REQUEST_ALL_DATA,
});

export const recieveAllData = (allData) => ({
  type: RECEIVE_ALL_DATA,
  regions: allData.regions,
  shareables: allData.shareables,
});

export const fetchAllData = () => (dispatch) => {
  dispatch(requestAllData());
  return axios.get(ALL_DATA_URL).then((response) => {
    const allData = response.data;
    dispatch(recieveAllData(allData));
  });
};
