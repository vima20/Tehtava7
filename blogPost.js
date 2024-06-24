import React from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, deleteBlog } from '../actions/blogActions';

const BlogPost = ({ blog }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeBlog(blog.id));
  };

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
  };

  return (
    <div className="blog-post">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button onClick={handleLike}>Tykkää ({blog.likes})</button>
      <button onClick={handleDelete}>Poista</button>
    </div>
  );
};

export default BlogPost;
