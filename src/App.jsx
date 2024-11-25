import { useState } from 'react'
import './App.css'
import AppProps from './props/AppProps.jsx'
import AppCard from './assignment1/AppCard.jsx'
import AppSignUp from './assignment2/AppSignUp.jsx'
import AppMode from './projects/clrMode/AppMode.jsx'
import AppMapping from './mapping/AppMapping.jsx'
import AppState from './state/AppState.jsx'
import AppArray from './array/AppArray.jsx'
import AppApi from './api/AppApi.jsx'
import AppPropDrilling from './propDrilling/AppPropDrilling.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AppProps/> */}
      {/* < AppCard/> */}
      {/* <AppSignUp/> */}
      {/* <AppMode /> */}
      {/* <AppState /> */}
      {/* <AppMapping /> */}
      {/* <AppArray /> */}
      {/* <AppApi /> */}
      <AppPropDrilling />
    </>
  )
}

export default App
