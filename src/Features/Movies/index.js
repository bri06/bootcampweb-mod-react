import React, {Component, Fragment} from 'react';
import debounce from 'lodash/debounce';
import './cards.css';
import Header from '../Header';
import NoMatch from '../AppRoutes/NoMatch';
import Cards from '../Movies/Cards';
import storage from '../../Commons/LocalStorage'

const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=5b01525928c6fc3f12ef22349785dab5`;
const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=5b01525928c6fc3f12ef22349785dab5&language=en-US&page=1';

const { update, get } = storage();

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.handleTitleChange();
  }

  handleTitleChange = (title) => {
    fetch(title ? `${MOVIE_URL}&query=${title}` : POPULAR_MOVIES)
    .then((res) => res.json())
    .then(({ results }) => {
      this.setState({ movies: results })
      console.log(results);
    })
    .catch(() => this.setState({ error: true }))
    .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading, error } = this.state;
    if(error) {
      return <NoMatch />;
    }
    if(loading) {
      return <p>Cargando...</p>;
    }
    return(
      <Fragment>
        <Header searchChangeHandler={debounce(this.handleTitleChange, 400)} />
        <Cards
          addCollection={(id, movie) => update('collections', id, movie)}
          buttons={get('collections')}
          items={movies}
        />
      </Fragment>
    );
  }
}

export default Movies;
