import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form>
      <input
        type="text"
        ref={node => input = node}
        placeholder="What needs to be done..."
      />
      <button
        type="button"
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add
      </button>
    </form>
  );
};

export default connect()(AddTodo);
