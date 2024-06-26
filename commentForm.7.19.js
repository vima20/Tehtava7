import React, { useState } from 'react';
import axios from 'axios'; // Import Axios if using
import './CommentForm.css'; // Import styles if needed

const CommentForm = ({ blogId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      text: commentText,
    };

    // Use Axios or fetch API to send the comment
    axios.post(`/api/blogs/${blogId}/comments`, newComment)
      .then(() => {
        // Clear the form and inform the parent component
        setCommentText('');
        onCommentSubmit();
      })
      .catch((error) => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment-text">Kommentti:</label>
      <textarea
        id="comment-text"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        rows="5"
      />
      <button type="submit">Lähetä kommentti</button>
    </form>
  );
};

export default CommentForm;
