const initialState = {
    message: '',
    type: '', // Optional: 'success', 'error', etc.
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return {
          message: action.message,
          type: action.type,
        };
      case 'REMOVE_NOTIFICATION':
        return initialState;
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  