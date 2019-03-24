import React, { Component, Fragment } from 'react';
import NoMatch from '../AppRoutes/NoMatch';
import Header from '../Header';
import MovieDetail from './MovieDetail';

const DEATIL_MOVIE = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=5b01525928c6fc3f12ef22349785dab5';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movieDetail: {},
      movieReview: {},
      loading: true,
      error: false
    }
  }

  async componentDidMount() {
    await this.getDetail();
    await this.getReview();
    this.setState({ loading: false });
  }

  getDetail = () => {
    const id = this.state.id;
    return fetch(`${DEATIL_MOVIE}${id}${API_KEY}`)
    .then((res) => res.json())
    .then((detail) => this.setState({ movieDetail: detail }))
    .catch(() => this.setState({ error: true }));
  }

  getReview = () => {
    const id = this.state.id;
    return fetch(`${DEATIL_MOVIE}${id}/reviews${API_KEY}`)
    .then((res) => res.json())
    .then(({ results }) => this.setState({ movieReview: results }))
    .catch(() => this.setState({ error: true }));
  }

  render() {
    const { movieDetail, error, loading, movieReview } = this.state;
    if(error) {
      return <NoMatch />;
    }

    if(loading) {
      return <p>Loading...</p>;
    }

    return(
      <Fragment>
        <Header />
        <MovieDetail data={movieDetail} review={movieReview} />
      </Fragment>
    );
  }
}

export default DetailView;
