import { useState } from 'react'
import './App.css'
import AppProps from './props/AppProps.jsx'
import AppCard from './assignment1/AppCard.jsx'
import AppSignUp from './assignment2/AppSignUp.jsx'
import AppMode from './projects/clrMode/AppMode.jsx'
import AppState from './state/AppState.jsx'
import AppMapping from './mapping/AppMapping.jsx'
import AppArray from './array/AppArray.jsx'
import AppApi from './api/AppApi.jsx'
import AppPropDrilling from './propDrilling/AppPropDrilling.jsx'
import AppContextAPI from './contextAPI/AppContextAPI.jsx'
import AppHook from './hook/useContext/AppHook.jsx'

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
      {/* <AppPropDrilling /> */}
      {/* <AppContextAPI /> */}
      <AppHook />
    </>
  )
}

export default App
