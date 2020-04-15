import axios from 'axios';
import { SERVER_URL } from '../../config';

export const REQUEST_SINGLE_SHAREABLE = 'REQUEST_SINGLE_SHAREABLE';
export const RECEIVE_SINGLE_SHAREABLE = 'RECEIVE_SINGLE_SHAREABLE';

const SINGLE_SHAREABLE_URL = `${SERVER_URL}/shareable`;

export const requestSingleShareable = () => ({
  type: REQUEST_SINGLE_SHAREABLE,
});

export const recieveSingleShareable = (shareable) => ({
  type: RECEIVE_SINGLE_SHAREABLE,
  shareable,
});

export const fetchSingleShareable = (id) => (dispatch) => {
  dispatch(requestSingleShareable());
  return axios.get(`${SINGLE_SHAREABLE_URL}/${id}`).then((shareable) => {
    return dispatch(recieveSingleShareable(shareable));
  });
};

export const loadSingleShareable = (id) => {
  return (dispatch, getState) => {
    const shareable = getState().app.cachedShareables[id];
    if (!shareable) {
      return dispatch(fetchSingleShareable(id));
    } else {
      return dispatch(recieveSingleShareable(shareable));
    }
  };
};
