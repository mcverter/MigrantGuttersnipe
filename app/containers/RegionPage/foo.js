import { LOCATION_CHANGE } from 'react-router-redux';

export function manualCategories(state = [], action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      debugger;
      break;
    /*
      action.payload is something like:
      {
        pathname: '/',
        search: '',
        hash: '',
        state: null,
        action: 'PUSH',
        key: 'xwl8yl',
        query: {},
        $searchBase: {
          search: '',
          searchBase: ''
        }
      }
    */

    default:
      return state;
  }
}
