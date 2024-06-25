import React, { useState, useEffect, useParams } from 'react';
import './BlogView.css'; // Import styles if needed

const BlogView = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/blogs/${blogId}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [blogId]);

  return (
    <div className="blog-view">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p className="blog-author">Kirjoittaja: {blog.author}</p>
          <p className="blog-date">Julkaistu: {new Date(blog.createdAt).toLocaleDateString('fi-FI')}</p>
          <div className="blog-content">{blog.content}</div>
          {/* Display other blog details as needed */}
        </>
      ) : (
        <p>Ladataan blogia...</p>
      )}
    </div>
  );
};

export default BlogView;
