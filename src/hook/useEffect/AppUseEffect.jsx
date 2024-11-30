import React, { useEffect, useState } from 'react'
import DemoUseEffect from './DemoUseEffect'
function AppUseEffect() {
    const Names = ['Peter','Thor','Thor','Steven','Tommy'];
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        if(index === Names.length - 1){
          return;
        }
        setTimeout(()=>{
            setIndex((index)=>index+1)
        },2000);

    },[index])
  return (
    <div>
      <DemoUseEffect name = {Names[index]} />
    </div>
  )
}

export default AppUseEffect
