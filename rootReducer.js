import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  notifications: notificationReducer,
  // Add other reducers for your application here
});

export default rootReducer;
