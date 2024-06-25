import React, { useState, useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';
import './UserView.css'; // Import styles if needed

const UserView = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div className="user-view">
      {user ? (
        <>
          <h3>{user.name}</h3>
          <p>Sähköposti: {user.email}</p>
          {/* Display other user details as needed */}
          <h2>Käyttäjän blogit</h2>
          {user.blogs && user.blogs.length > 0 ? (
            <ul className="user-blogs">
              {user.blogs.map((blog) => (
                <li key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Käyttäjällä ei ole blogeja.</p>
          )}
        </>
      ) : (
        <p>Ladataan käyttäjän tietoja...</p>
      )}
    </div>
  );
};

export default UserView;
