import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import BlogList from './components/BlogList';
import CreateBlogForm from './components/CreateBlogForm';

const App = () => {
  // No need for app-level state as blogs are in Redux

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Blogit</h1>
        <BlogList />
        <CreateBlogForm />
      </div>
    </Provider>
  );
};

export default App;
