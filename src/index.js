import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import TodoApp from './containers/TodoApp';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
