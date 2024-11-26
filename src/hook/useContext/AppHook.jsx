import React, { createContext } from 'react'
import A_comp from './A_comp'

const studentinfo = createContext();
const studentinfo2 = createContext();
function AppHook() {
  const f_name = "Peter";
  const l_name = "Parker";
  return (
    <>
    <studentinfo.Provider value={f_name}>
      <studentinfo2.Provider value={l_name}>
    <A_comp/>
      </studentinfo2.Provider>
    </studentinfo.Provider>
    </>
  )
}

export default AppHook
// export both context/data
export { studentinfo, studentinfo2 }
