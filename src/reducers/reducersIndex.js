import { combineReducers } from 'redux';
import app from './appReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  app
});

export default rootReducer;
