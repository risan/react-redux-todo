import React from 'react';
import FilterLink from '../containers/FilterLink';
import FILTERS from '../constants/visibility-filters';

const Footer = () => (
  <footer>
    <span className="title">Show :</span>
    <nav>
      <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
      <span className="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
      <span className="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </nav>
  </footer>
);

export default Footer;
