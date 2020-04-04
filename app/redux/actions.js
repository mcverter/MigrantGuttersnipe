export const REQUEST_ALL_SHAREABLES = 'REQUEST_ALL_SHAREABLES';
export const RECEIVE_ALL_SHAREABLES = 'RECEIVE_ALL_SHAREABLES';

const SERVER_URL = 'http://foo.com';
export const requestAllShareables = () => ({
  type: REQUEST_ALL_SHAREABLES,
});

export const recieveAllShareables = json => ({
  type: RECEIVE_ALL_SHAREABLES,
  shareables: json.data.shareables,
});

export const fetchAllShareables = () => dispatch => {
  dispatch(requestAllShareables());
  return fetch(SERVER_URL)
    .then(response => response.json())
    .then(json => dispatch(recieveAllShareables(json)));
};
