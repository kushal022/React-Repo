import React from 'react'
import { studentinfo,studentinfo2 } from './AppContextAPI'
function C_Comp() {
  return (
    <>
        <h1>Component C</h1>
        <studentinfo.Consumer>
            {/* //nee to return callback function */}
            {(getf_name) => {
                return <studentinfo2.Consumer>
                    {(getl_name)=>{
                        return (
                        <h3> Student Full Name: {getf_name} {getl_name} </h3>
                        )
                    }}
                </studentinfo2.Consumer>
            }}
        </studentinfo.Consumer>
      
    </>
  )
}

export default C_Comp

// it seems like Callback Hell 
// complex
// that's why 'Hooks' comes in picture