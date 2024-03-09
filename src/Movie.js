// Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  const handleRate = (rating) => {
    // Update movie rating
  };

  const handleAddReview = (reviewText) => {
    setReviews([...reviews, reviewText]);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} onRate={handleRate} />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default Movie;
