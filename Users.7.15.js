import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Users.css'; // Import styles if needed

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-list">
      {users.length === 0 ? (
        <p>Ei käyttäjiä näytettäväksi.</p>
      ) : (
        users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <div className="user-card">
              <h3>{user.name}</h3>
              <p>Sähköposti: {user.email}</p>
              {/* Display other user details as needed */}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Users;
