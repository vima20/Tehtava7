import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import UserView from './components/UserView';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/users/:userId" component={UserView} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
