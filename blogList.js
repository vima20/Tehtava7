import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../actions/blogActions';
import BlogPost from './BlogPost';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
