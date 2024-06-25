import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import Blogs from './components/Blogs';
import BlogView from './components/BlogView';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blogs/:blogId" component={BlogView} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
