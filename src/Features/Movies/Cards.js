import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';
import StarRating from '../../Commons/StarRating';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const Cards = (props) => {
  return (
      <div className="cards-container">
        {
          props.items.map((item) => {
            item.poster_src = `${IMG_BASE_URL}${item.poster_path}`;
            return <div key={item.id} className="card">
              <h1>{item.original_title}</h1>
              <Link to={`/movie/${item.id}`}>
                <img className="card-image" src={item.poster_src} alt={item.title} />
              </Link>
              {props.likes && (
                <div className="star-rating">
                  <StarRating
                    rating={props.likes[item.id] || 0}
                    onStarClick={(nextValue) => props.onStarClick(nextValue, item.id)}
                  />
                </div>
              )}
              <div className="header-card-container">
                <div className="date-btn-container">
                  <p>Release: <i>{item.release_date}</i></p>
                  {props.deleteButton && (
                    <button className="btn-delete" onClick={() => props.deleteMovie(item.id)}><i className="fas fa-trash-alt"></i></button>
                  )}
                </div>
                <h3>Description</h3>
                <p>{item.overview}</p>
              </div>
              {props.buttons && (
                <Fragment>
                  <h4 className="add-colletcion-tittle">Add to a collection:</h4>
                  <div className="btn-container">
                    {props.buttons.map((data) =>
                      <div key={data.id}>
                        <button className="button" onClick={() => props.addCollection(data.id, item)}>
                          {data.name}
                          <i className="fas fa-plus-circle"></i>
                        </button>
                      </div>)}
                  </div>
                </Fragment>
              )}
            </div>
          })
        }
      </div>
  )

};

Cards.defaultProps = {
  items: [],
  buttons: [],
  onStarClick: () => 0,
  deleteMovie: () => 0,
  deleteButton: false
};

export default Cards;
