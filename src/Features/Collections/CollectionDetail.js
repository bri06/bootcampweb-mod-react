import React, { Component, Fragment } from 'react';
import './collectionDetail.css';
import Header from '../Header';
import Cards from '../Movies/Cards';
import storage from './../../Commons/LocalStorage';

const { getCollection, get, set, deleteMovie } = storage();

class CollectionDetail extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      name: '',
      likes: {}
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const { collectionId } = match.params;
    const collection = getCollection('collections', Number(collectionId));
    const collectionLikes = get('collectionLikes') || {};
    const likes = collectionLikes[collectionId] || {};
    this.setState({ ...collection, likes });
  }

  updateLikes = async (like, id) => {
    const newLike = {
      [id]: like
    };
    await this.setState({ likes: { ...this.state.likes, ...newLike } });
    const { match } = this.props;
    const { collectionId } = match.params;
    const collectionLikes = get('collectionLikes') || {};
    set('collectionLikes', { ...collectionLikes, [collectionId]: this.state.likes });
  }

  deleteMovie = (idMovie) => {
    const filterMovies = this.state.movies ? this.state.movies.filter((movie) => movie.id !== idMovie) : [];
    this.setState({ movies: filterMovies });
    const { match } = this.props;
    const { collectionId } = match.params;
    deleteMovie('collections', collectionId, idMovie);
  }

  render() {
    const { likes } = this.state;
    return(
    <Fragment>
      <Header />
      <h1 className="collection-title">{this.state.name.toUpperCase()}</h1>
      <Cards
        items={this.state.movies}
        likes={likes}
        onStarClick={this.updateLikes}
        deleteButton
        deleteMovie={this.deleteMovie}
      />
    </Fragment>
    );
  }
}

CollectionDetail.defaultProps = {
  name: "Drama",
  id: 1,
  movies: []
};

export default CollectionDetail;