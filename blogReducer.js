import { FETCH_BLOGS, ADD_BLOG } from '../types/blogActionTypes';

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;
