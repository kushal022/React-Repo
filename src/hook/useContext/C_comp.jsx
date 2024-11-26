import React , {useContext}from 'react'

// Import context/Data from Parent component
import { studentinfo,studentinfo2 } from './AppHook'
function C_comp() {
    // Use useContext hook to get data from Parent component.
    const f_name = useContext(studentinfo);
    const l_name = useContext(studentinfo2);
  return (
    <div>
        <h1>useContext() Hooks in React!</h1>
        <h2>this is third child component C_comp</h2>
        {/* Return the data directly no longer need for consumer like contextAPI */}
        <h2>MY name is (using useContext Hook): {f_name} {l_name}</h2>
      
    </div>
  )
}

export default C_comp
