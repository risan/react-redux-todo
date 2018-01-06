import React from 'react';
import Link from './Link';

const FilterLink = ({ filter, currentFilter, children, onClick }) => (
  <Link
    active={filter === currentFilter}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default FilterLink;
