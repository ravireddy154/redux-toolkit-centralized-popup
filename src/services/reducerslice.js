import { createSlice } from '@reduxjs/toolkit'


export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    value: false,
  },
  reducers: {
    popupValue: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { popupValue } = popupSlice.actions

export default popupSlice.reducer