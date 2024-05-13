import { DataType, FormDataType } from '@/app/[locale]/form/page'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export const initialState = []


export const dataTable = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    addItem: (state:any[], action   ) => {

      if (action.payload === undefined) return
      state.push(action.payload)
 
    },



  },
})

// Action creators are generated for each case reducer function
export const { addItem } = dataTable.actions

export default dataTable.reducer