import todo from './todo';

const initialState = [
  {
    id: 1,
    text: 'Learn React and Redux ⚛️',
    completed: true
  },
  {
    id: 2,
    text: 'Read a book 📗',
    completed: false
  },
  {
    id: 3,
    text: 'Write a blog post ✏️',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
