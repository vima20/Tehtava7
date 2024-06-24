import React from 'react';
import './User.css'; // Import styles if needed

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Sähköposti: {user.email}</p>
      {/* Display other user details as needed */}
    </div>
  );
};

export default User;
