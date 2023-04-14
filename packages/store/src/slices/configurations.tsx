import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Colors = {
  primary?: string
  secondary?: string
}

type ConfigurationsType = {
  colors: Colors;
}

const initialState: ConfigurationsType = {
  colors: {},
}

export const slice = createSlice({
  name: 'configurations',
  initialState,
  reducers: {
    addColors(state, actions: PayloadAction<Colors>) {
      return { ...state, colors: actions.payload }
    },
  },
})

export const configurationsSlice = {
  ...slice.actions,
}

export const configurationsReducer = slice.reducer
