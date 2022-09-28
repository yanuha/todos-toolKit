import { createStore } from 'redux';
import { createAction, nanoid } from '@reduxjs/toolkit';

// action creators
// export const addTodo = (title) => ({
//   type: "ADD_TODO",
//   title
// });
export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}));

// export const removeTodo = (id) => ({
//   type: "REMOVE_TODO",
//   id
// });
export const removeTodo = createAction('@@todos/REMOVE_TODO');

// export const toggleTodo = (id) => ({
//   type: "TOGGLE_TODO",
//   id
// });
export const toggleTodo = createAction('@@todos/TOGGLE_TODO');

console.log(addTodo.toString());
console.log(addTodo());
console.log(addTodo('asdfasdf'));

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo.toString(): {
      console.log(action);
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    }
    case removeTodo.toString(): {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case toggleTodo.toString(): {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(todos);
