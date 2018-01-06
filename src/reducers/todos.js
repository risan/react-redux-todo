import todo from './todo';

const initialState = [
  {
    id: 1,
    text: 'Learn Javascript',
    completed: true
  },
  {
    id: 2,
    text: 'Learn React and Redux',
    completed: true
  },
  {
    id: 3,
    text: 'Go to the gym',
    completed: false
  },
  {
    id: 4,
    text: 'Cook for dinner',
    completed: false
  },
  {
    id: 5,
    text: 'Write a blog post',
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
