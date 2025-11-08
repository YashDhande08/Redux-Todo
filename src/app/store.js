import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/AddTodoSlice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})