import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider, useDispatch } from 'react-redux';

import { store, configurationsSlice } from '@orbitall-core/store';
import { handle } from '@orbitall-core/guards';

function Initial() {
  const dispatch = useDispatch()
  const { addColors } = configurationsSlice

  const screens = handle(['CommonRoutes'])

  useEffect(() => {
    dispatch(addColors({
      primary: '#100e36',
      secondary: '#e00562'
    }))
  }, [])

  return (
    <>
      <StatusBar style="light" />
      {screens}
    </>
  );
}

const App = () => (
  <Provider store={store}>
    <Initial />
  </Provider>
)

export default App
