import {createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}


export const todoSlice = createSlice({
  name: 'todos',
  initialState, 
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_,index) => index !== action.payload)
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      if (state.todos[index]) {
        state.todos[index] = newText;
      }
    }
  },
})

export const { addTodo ,removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer