import { LIKE_BLOG, DELETE_BLOG } from '../types/blogActionTypes';
import axios from 'axios';

export const likeBlog = (blogId) => async (dispatch) => {
  const response = await axios.put(`/api/blogs/${blogId}/like`);
  dispatch({ type: LIKE_BLOG, payload: response.data });
};

export const deleteBlog = (blogId) => async (dispatch) => {
  await axios.delete(`/api/blogs/${blogId}`);
  dispatch({ type: DELETE_BLOG, payload: { id: blogId } });
};
