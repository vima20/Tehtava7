import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import BlogList from './components/BlogList';
import CreateBlogForm from './components/CreateBlogForm';
import { setCurrentUser } from './actions/userActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
    }
  }, []);

  // ... rest of the App component
};

export default App;
