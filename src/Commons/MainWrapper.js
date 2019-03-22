import React, { Fragment } from 'react';

const MainWrapper = ({ children, transparent }) => (
  <Fragment>
    <nav className={`navbar ${transparent ? 'transparency' : ''}`}>
      <a href="/">Videoteca</a>
    </nav>
    <main className={`main-layout ${!transparent ? 'transparency' : ''}`}>
      {children}
    </main>
  </Fragment>
);

export default MainWrapper;