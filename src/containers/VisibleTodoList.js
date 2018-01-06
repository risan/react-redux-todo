import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import FILTERS from '../constants/visibility-filters';
import { toggleTodo } from '../actions';

const filterVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: ({ id }) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
