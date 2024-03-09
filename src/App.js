// App.js
import React from 'react';
import MovieList from './MovieList';

const App = () => {
  // Sample movie data
  const movies = [
    {
      title: 'Inception',
      image: 'https://www.example.com/inception.jpg',
      synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      rating: 4,
    },
    {
      title: 'The Dark Knight',
      image: 'https://www.example.com/dark-knight.jpg',
      synopsis: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: 5,
    },
    // Add more movies as needed
  ];

  return (
    <div>
      <h1>Movie Rating App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
