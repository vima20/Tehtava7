import { FETCH_BLOGS, ADD_BLOG } from '../types/blogActionTypes';
import axios from 'axios';

export const fetchBlogs = () => async (dispatch) => {
  const response = await axios.get('/api/blogs');
  dispatch({ type: FETCH_BLOGS, payload: response.data });
};

export const addBlog = (blogData) => async (dispatch) => {
  const response = await axios.post('/api/blogs', blogData);
  dispatch({ type: ADD_BLOG, payload: response.data });
};
