import React from 'react';
import FilterLink from '../containers/FilterLink';
import FILTERS from '../constants/visibility-filters';

const Footer = () => (
  <footer>
    <span class="title">Show :</span>
    <nav>
      <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
      <span class="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
      <span class="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </nav>
  </footer>
);

export default Footer;
