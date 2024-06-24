import React from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, deleteBlog } from '../actions/blogActions';
import { useSelector } from 'react-redux';

const BlogPost = ({ blog }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  // ... rest of the BlogPost component
};

export default BlogPost;
