import axios from 'axios';
import { SERVER_URL } from '../../config';

export const REQUEST_SINGLE_SHAREABLE = 'REQUEST_SINGLE_SHAREABLE';
export const RECEIVE_SINGLE_SHAREABLE = 'RECEIVE_SINGLE_SHAREABLE';
export const LOAD_CURRENT_SHAREABLE_ARRAY = 'LOAD_CURRENT_SHAREABLE_ARRAY';
export const LOAD_CURRENT_SINGLE_SHAREABLE = 'LOAD_CURRENT_SINGLE_SHAREABLE';

const SINGLE_SHAREABLE_URL = `${SERVER_URL}/shareable`

export const requestSingleShareable = () => ({
  type: REQUEST_SINGLE_SHAREABLE,
});

export const recieveSingleShareable = shareable => ({
  type: RECEIVE_SINGLE_SHAREABLE,
  shareable
});

export const fetchSingleShareable = () => dispatch => {
  dispatch(requestSingleShareable());
  return axios.get(SINGLE_SHAREABLE_URL)
    .then(response => response.json())
    .then(shareable => {
      return dispatch(recieveSingleShareable(shareable));
    });
};

export const loadSingleShareable = (id) => {
  return (dispatch, getState) => {
    debugger;
    const shareable = getState().app.cachedShareables[id];
    if (!shareable) {
      return dispatch(fetchSingleShareable(id));
    } else {
      return dispatch(recieveSingleShareable(shareable));
    }
  }
};


/*

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

 */
