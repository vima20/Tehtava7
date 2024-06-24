import { FETCH_BLOGS, ADD_BLOG, LIKE_BLOG, DELETE_BLOG } from '../types/blogActionTypes';

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
    case LIKE_BLOG:
      const updatedBlogs = state.blogs.map((blog) => {
        if (blog.id === action.payload.id) {
          return { ...blog, likes: action.payload.likes };
        }
        return blog;
      });
      return {
        ...state,
        blogs: updatedBlogs,
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default blogReducer;
