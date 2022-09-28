// import { createStore } from 'redux';
import { nanoid, createSlice, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
//   payload: {
//     title,
//     id: nanoid(),
//     completed: false,
//   },
// }));
// // action creators
// // export const addTodo = (title) => ({
// //   type: "ADD_TODO",
// //   title
// // });

// export const removeTodo = createAction('@@todos/REMOVE_TODO');
// // export const removeTodo = (id) => ({
// //   type: "REMOVE_TODO",
// //   id
// // });

// export const toggleTodo = createAction('@@todos/TOGGLE_TODO');
// // export const toggleTodo = (id) => ({
// //   type: "TOGGLE_TODO",
// //   id
// // });

// // console.log(addTodo.toString());
// // console.log(addTodo());
// // console.log(addTodo("asdfasdf"));

// const todos = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push(action.payload);
//   },
//   [removeTodo]: (state, action) => {
//     const index = state.findIndex((todo) => todo.id === action.payload);
//     state.splice(index, 1);
//     // or
//     // return state.filter((todo) => todo.id !== action.payload);
//   },
//   [toggleTodo]: (state, action) => {
//     const currentTodo = state.find((todo) => todo.id === action.payload);
//     currentTodo.completed = !currentTodo.completed;
//   },
// });

// // const todos = createReducer([], (builder) => {
// //   builder
// //     .addCase(addTodo, (state, action) => {
// //       state.push(action.payload);
// //     })
// //     .addCase(removeTodo, (state, action) => {
// //       const index = state.findIndex((todo) => todo.id === action.payload);
// //       state.splice(index, 1);
// //       // or
// //       // return state.filter((todo) => todo.id !== action.payload);
// //     })
// //     .addCase(toggleTodo, (state, action) => {
// //       const currentTodo = state.find((todo) => todo.id === action.payload);
// //       currentTodo.completed = !currentTodo.completed;
// //     });
// // });

// // const todos = (state = [], action) => {
// //   switch (action.type) {
// //     case addTodo.toString(): {
// //       console.log(action);
// //       return [
// //         ...state,
// //         {
// //           ...action.payload
// //         }
// //       ];
// //     }
// //     case removeTodo.toString(): {
// //       return state.filter((todo) => todo.id !== action.payload);
// //     }
// //     case toggleTodo.toString(): {
// //       return state.map((todo) =>
// //         todo.id === action.payload
// //           ? { ...todo, completed: !todo.completed }
// //           : todo
// //       );
// //     }
// //     default: {
// //       return state;
// //     }
// //   }
// // };

const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    toggleTodo: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
  // reducer: {
  //   todos: todoSlice.reducer,
  // },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: [{ id: 1, title: 'Redux', completed: true }],
  enhancers: [],
});
