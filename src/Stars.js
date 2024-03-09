// Stars.js
import React, { useState } from 'react';

const Stars = ({ rating, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (index) => {
    onRate(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={index}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            {starRating <= (hoveredRating !== null ? hoveredRating : rating) ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default Stars;

