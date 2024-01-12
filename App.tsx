import React from 'react'
import { View, Text } from 'react-native'
import Home from './src/screens/home'
import SpinnerModal from './src/components/spinner-modal'
import useSpinnerStore from './src/store/spinner-modal-store'

const App = () => {

  const { show } = useSpinnerStore()

  return (
    <>
      {show && <SpinnerModal />}
      <Home />
    </>
  )
}

export default App