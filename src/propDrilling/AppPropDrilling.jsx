import React from 'react'
import CompOne from './CompOne'
function AppPropDrilling() {
    const f_name = 'Peter'
  return (
    <div>
      <h1>This is PropDrilling Demo App!!</h1>
      <CompOne f_name = {f_name} />
    </div>
  )
}

export default AppPropDrilling
