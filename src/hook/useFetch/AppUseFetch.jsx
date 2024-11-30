import React from 'react'
import DemoFetch from './DemoFetch'
import CustomHook from './CustomHook'
function AppUseFetch() {
  return (
    <div>
        {/* Old way */}
        {/* <DemoFetch/> */}
        {/* New way */}
        <CustomHook/>
    </div>
  )
}

export default AppUseFetch
