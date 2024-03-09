// ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() !== '') {
      onSubmit(reviewText);
      setReviewText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
