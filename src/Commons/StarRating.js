import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = (props) => {
  const { rating, onStarClick } = props;
  return (
    <div className="star-rating">
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