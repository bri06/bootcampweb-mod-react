import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = (props) => {
  const { rating, onStarClick } = props;
  return (
    <div className="star-rating">
      <h2>Rating from state: {rating}</h2>
      <StarRatingComponent
        name="rate1"
        starCount={10}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default StarRating;