import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialTodosState = [
  {
    id: uuid(),
    title: '',
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodosState,
  reducers: {
    addTodo(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
