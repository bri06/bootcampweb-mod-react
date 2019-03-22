import React from 'react';
import { MainWrapper } from '../../Commons'; //importamos index de commons

const NoMatch = () => (
  <MainWrapper transparent>
    <div className="not-found-layout">
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  </MainWrapper>
);

export default NoMatch;