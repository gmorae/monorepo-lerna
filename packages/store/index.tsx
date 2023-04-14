import { useDispatch } from 'react-redux';

import store from './src/store';
import { configurationsSlice } from './src/slices/configurations';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export {
  store,
  configurationsSlice
}
