import React from 'react';

const completedStyle = {
  textDecoration: 'line-through'
};

const Todo = ({ text, completed, onClick }) => (
  <li style={completed ? completedStyle : null} onClick={onClick}>
    {text}
  </li>
);

export default Todo;
