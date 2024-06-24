import React, { useState, useEffect } from 'react';
import './Users.css'; // Import styles if needed

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users') // Replace with your API endpoint for users
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-list">
      {users.length === 0 ? (
        <p>Ei käyttäjiä näytettäväksi.</p>
      ) : (
        users.map((user) => (
          <User key={user.id} user={user} />
        ))
      )}
    </div>
  );
};

export default Users;
