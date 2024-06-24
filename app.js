import React from 'react';
import { connect } from 'react-redux';
import Notification from './Notification';

const App = ({ notifications }) => {
  return (
    <div>
      {/* Your application content */}
      <Notification notifications={notifications} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps)(App);
