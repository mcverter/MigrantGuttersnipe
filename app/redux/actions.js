export const REQUEST_ALL_SHAREABLES = 'REQUEST_ALL_SHAREABLES';
export const RECEIVE_ALL_SHAREABLES = 'RECEIVE_ALL_SHAREABLES';

export const REQUEST_ALL_REGIONS = 'REQUEST_ALL_REGIONS';
export const RECEIVE_ALL_REGIONS = 'RECEIVE_ALL_REGIONS';

export const REQUEST_ALL_DATA = 'REQUEST_ALL_DATA';
export const RECEIVE_ALL_DATA = 'RECEIVE_ALL_DATA';

const DATA_URL = 'https://migrant-guttersnipe-backend.herokuapp.com/'

const SHAREABLES_URL =
  'https://my-json-server.typicode.com/mcverter/MigrantGuttersnipe/shareables';
const REGIONS_URL =
  'https://my-json-server.typicode.com/mcverter/MigrantGuttersnipe/regions';

export const requestAllData = () => ({
  type: REQUEST_ALL_DATA,
});

export const recieveAllData = json => ({
  type: RECEIVE_ALL_DATA,
  data: json,
});


export const requestAllShareables = () => ({
  type: REQUEST_ALL_SHAREABLES,
});

export const recieveAllShareables = json => ({
  type: RECEIVE_ALL_SHAREABLES,
  shareables: json,
});


function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

function shouldFetchRegions(state, region) {
  return  (!state.app.shareables || !state.app.regions)
}


export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

export function fetchRegionDataIfNeeded(region) {
  return (dispatch, getState) => {
    if (shouldFetchRegions(getState(), region)) {
      return dispatch(fetchAllData())
    }
  }
}
export const fetchAllShareablesIfNeeded = () => {
  if (shouldFetchShareables(getState())) {
    return dispatch(fetchAllData())
  }
}
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

export const fetchAllData = () => dispatch => {
  dispatch(requestAllData());
  return fetch(DATA_URL)
    .then(response => response.json())
    .then(json => {
      console.log('data', json);
      dispatch(recieveAllData(json));
    });
};
