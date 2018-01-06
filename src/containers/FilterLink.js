import { connect } from 'react-redux';
import FilterLink from '../components/FilterLink';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  children: ownProps.children,
  currentFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
