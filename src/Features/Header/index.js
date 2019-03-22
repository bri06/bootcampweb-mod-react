import React, { Component } from 'react';
import logo from '../../Assets/video-camera.png';
import './header.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: ''
    };
  }

  performSearch = (e) => {
    this.setState({ inputSearch: e.target.value })
    this.props.searchChangeHandler(e.target.value);
  };

  render() {
    return(
      <div className="header">
        <div className="header-links">
          <div className="img-container">
            <a href="/"><img className="logo" src={logo} alt="logo"/></a>
          </div>
          <a href="/">Home</a>
          <a href="/mycollections">My collections</a>
        </div>
        {this.props.search && (
          <div className="movie-search">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="input-search" onChange={this.performSearch} placeholder="Type to search a movie..." />
            </form>
          </div>
        )}
      </div>
    );
  }
}

Header.defaultProps = {
  searchChangeHandler: () => '',
  search: false
};

export default Header;