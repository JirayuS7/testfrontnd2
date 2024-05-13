import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EditId {
  id: any
}

export const initialState: EditId = {
  id: ""
}

export const formEditId = createSlice({
  name: 'formEditId',
  initialState,
  reducers: {
    addPost: (state, action  ) => { 
  

      state.id = action.payload 
    },

    increment: (state) => {
      console.log("🚀 ~ state:", state)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id =  ""
    },
    decrement: (state) => {
      state.id = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement ,addPost } = formEditId.actions

export default formEditId.reducer