import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'; // Import styles if needed

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-list">
      {blogs.length === 0 ? (
        <p>Ei blogeja näytettäväksi.</p>
      ) : (
        blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <div className="blog-card">
              <h3>{blog.title}</h3>
              <p className="blog-author">Kirjoittaja: {blog.author}</p>
              <p className="blog-date">Julkaistu: {new Date(blog.createdAt).toLocaleDateString('fi-FI')}</p>
              {/* Display other blog details as needed */}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Blogs;
