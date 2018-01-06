import React from 'react';
import FilterLink from '../containers/FilterLink';
import FILTERS from '../constants/visibility-filters';

const Footer = () => (
  <footer>
    <span>Show :</span>
    <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>&nbsp;,
    <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>&nbsp;,
    <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
  </footer>
);

export default Footer;
