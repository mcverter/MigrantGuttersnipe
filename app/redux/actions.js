export const REQUEST_ALL_SHAREABLES = 'REQUEST_ALL_SHAREABLES';
export const RECEIVE_ALL_SHAREABLES = 'RECEIVE_ALL_SHAREABLES';

export const REQUEST_ALL_REGIONS = 'REQUEST_ALL_REGIONS';
export const RECEIVE_ALL_REGIONS = 'RECEIVE_ALL_REGIONS';

const SHAREABLES_URL =
  'https://my-json-server.typicode.com/mcverter/MigrantGuttersnipe/shareables';
const REGIONS_URL =
  'https://my-json-server.typicode.com/mcverter/MigrantGuttersnipe/regions';

export const requestAllShareables = () => ({
  type: REQUEST_ALL_SHAREABLES,
});

export const recieveAllShareables = json => ({
  type: RECEIVE_ALL_SHAREABLES,
  shareables: json,
});

export const fetchAllShareables = () => dispatch => {
  dispatch(requestAllShareables());
  return fetch(SHAREABLES_URL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(recieveAllShareables(json));
    });
};

export const requestAllRegions = () => ({
  type: REQUEST_ALL_REGIONS,
});

export const recieveAllRegions = json => ({
  type: RECEIVE_ALL_REGIONS,
  regions: json,
});

export const fetchAllRegions = () => dispatch => {
  dispatch(requestAllRegions());
  return fetch(REGIONS_URL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(recieveAllRegions(json));
    });
};
