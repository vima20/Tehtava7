import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import for routing

// Notification context (provider and consumer)
// ... (previous code for NotificationContext)

const AnecdoteList = () => {
  const { isLoading, error, data, refetch } = useQuery('anecdotes', getAnecdotes);
  const { showNotification, state } = React.useContext(NotificationContext);
  const navigate = useNavigate(); // Hook for navigation

  const [addAnecdoteMutation, { isLoading: adding, error: addingError }] = useMutation(addAnecdote);
  const [content, setContent] = useState('');

  const handleAddAnecdote = async (event) => {
    event.preventDefault();

    try {
      const newAnecdote = await addAnecdoteMutation(content);
      setContent(''); // Clear input field after submission
      showNotification('Uusi anekdootti lisätty!', 5000); // Display notification for 5 seconds
      refetch(); // Refetch data to update the list
      navigate('/anecdotes'); // Redirect to all anecdotes view
    } catch (error) {
      showNotification(error.message); // Display error message
    }
  };

  const handleUpvote = (id) => {
    updateVoteMutation(id);
    showNotification('Äänestetty!');
  };

  const handleShowAnecdote = (id) => {
    navigate(`/anecdotes/${id}`); // Navigate to single anecdote page
  };

  if (isLoading) {
    return <div>Lataa...</div>;
  }

  if (error) {
    return <div>Virhe anekdoottien hakemisessa: {error.message}</div>;
  }

  const anecdotes = data;

  return (
    <div>
      <h2>Anekdootit</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link> {/* Link to single anecdote */}
          <div>
            ääniä: {anecdote.votes}
            <button onClick={() => handleUpvote(anecdote.id)}>äänestä</button>
          </div>
        </div>
      ))}
      <form onSubmit={handleAddAnecdote}>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button disabled={adding}>lisää</button>
        {addingError && <div>Virhe: {addingError.message}</div>}
      </form>
      {state.show && <Notification />}
    </div>
  );
};

export default AnecdoteList;
