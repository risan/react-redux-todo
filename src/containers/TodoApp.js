import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';

const TodoApp = () => (
  <section className="todo">
    <h1>Todo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
);

export default TodoApp;
