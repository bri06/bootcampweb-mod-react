import React from 'react';
import './Button.css';

const Button = ({ type, children, dataCy = '' }) => (
  <button className="button" data-cy={dataCy} type={type}>
    {children}
  </button>
);

export default Button;