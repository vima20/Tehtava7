import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actionTypes';

export const addNotification = (message, type) => ({
  type: ADD_NOTIFICATION,
  message,
  type,
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
});
