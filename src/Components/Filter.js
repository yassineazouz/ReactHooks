import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onFilterChange({ title: newTitle, rating });
  };

  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
    onFilterChange({ title, rating: newRating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
