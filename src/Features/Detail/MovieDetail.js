import React from 'react';
import './movieDetail.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const MovieDetail = ({ data, review }) => (
  <div className="card-detail">
    <h1>{data.original_title}</h1>
    <div className="detail-container">
      <img className="detail-image" src={`${IMG_BASE_URL}${data.poster_path}`} alt={data.original_title} />
      <div className="detail-description">
        <p>{data.overview}</p>
        <p>{
          data.production_companies.map((data) => data.name)
        }</p>
        <div className="releaseDate">
          <h4>Fecha de lanzamiento: </h4>
          <i>{data.release_date}</i>
        </div>
        <div className="genres-container">
          {data.genres.map((genre) =>
            <div key={genre.id} className="genre-tag">{genre.name}</div>
            )}
        </div>
      </div>
    </div>
    <div className="reviews-container">
      <h2>Reviews</h2>
      {review.map(({ id, author, content }) => {
        return <div key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </div>
      } )}
    </div>
  </div>

);

export default MovieDetail;
