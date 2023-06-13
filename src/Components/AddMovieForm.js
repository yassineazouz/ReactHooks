import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePosterURLChange = (e) => {
    setPosterURL(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={handlePosterURLChange}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={handleRatingChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
