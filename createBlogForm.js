import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../actions/blogActions';

const CreateBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = { title, content };
    dispatch(addBlog(newBlog));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Otsikko:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Sisältö:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Luo blogi</button>
    </form>
  );
};

export default CreateBlogForm;
