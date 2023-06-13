import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovieForm from './Components/AddMovieForm';
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilterChange = (filterData) => {
    const { title, rating } = filterData;

    // Filter movies based on title and rating
    const filtered = movies.filter((movie) => {
      const matchTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchRating = movie.rating >= rating;
      return matchTitle && matchRating;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    const validatedRating = newMovie.rating > 10 ? 10 : newMovie.rating;
  
    const movieToAdd = {
      ...newMovie,
      rating: validatedRating,
    };
  
    setMovies([...movies, movieToAdd]);
  };
  
  

  return (
    <div className="app">
      <h1>Movie App</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
    </div>
  );
};

export default App;
