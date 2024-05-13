import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  './features/counter/counterSlice'
import   formEditId   from './features/formEditIdSlice'
import   dataTable   from './features/dataTableSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formEditId ,
    dataTable: dataTable

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch