import React from 'react';

const Link = ({ active, children, onClick }) => (
  active ?
    <a className="link link-active">{children}</a> :
    <a href="#link" className="link"
      onClick={(e) => {
        e.preventDefault();
        onClick()
      }}
    >
      {children}
    </a>
);

export default Link;
