import { configureStore } from '@reduxjs/toolkit'
import { configurationsReducer } from './slices/configurations'

const store = configureStore({
  reducer: {
    configurations: configurationsReducer
  }
})

export default store