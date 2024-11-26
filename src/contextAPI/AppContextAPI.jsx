import React from "react";
import A_Comp from "./A_Comp";
 
import { createContext } from "react";
const studentinfo = createContext()
const studentinfo2 = createContext()
function AppContextAPI() {

    // Data want to send
    const f_name = 'Peter';
    const l_name = 'Parker'
  return (
    <>
    <studentinfo.Provider value={f_name} >
        {/* here 'value' keyword for attribute is mandatory. */}
        <studentinfo2.Provider value = {l_name}>
        <A_Comp/>
        </studentinfo2.Provider>
    </studentinfo.Provider>
    </>
  )
}
export default AppContextAPI
/// also need to export it
export { studentinfo,studentinfo2 }

// it seems like Callback Hell 
// complex
// that's why 'Hooks' comes in picture