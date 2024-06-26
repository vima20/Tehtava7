import React, { useState, useEffect, useParams } from 'react';
import CommentForm from './CommentForm';
import './BlogView.css'; // Import styles if needed

const BlogView = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/blogs/${blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        fetch(`/api/blogs/${blogId}/comments`)
          .then((response) => response.json())
          .then((data) => setComments(data));
      });
  }, [blogId]);

  const handleCommentSubmit = () => {
    // Update comments state after successful comment submission
    fetch(`/api/blogs/${blogId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  return (
    <div className="blog-view">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p className="blog-author">Kirjoittaja: {blog.author}</p>
          <p className="blog-date">Julkaistu: {new Date(blog.createdAt).toLocaleDateString('fi-FI')}</p>
          <div className="blog-content">{blog.content}</div>

          <div className="comments-section">
            <h3>Kommentit</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>

            <CommentForm blogId={blogId} onCommentSubmit={handleCommentSubmit} />
          </div>
        </>
      ) : (
        <p>Ladataan blogia...</p>
      )}
    </div>
  );
};

export default BlogView;
