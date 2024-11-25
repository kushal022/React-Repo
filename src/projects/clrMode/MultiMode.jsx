import React from 'react'
import { useState } from 'react'

function MultiMode() {
    const clrArr = ['gray','green','blue','red','black','yellow'];
    const [mode, setMode] = useState(clrArr[Math.floor(Math.random()*clrArr.length)]);
    // console.log(mode)
    const changeMode = function(){
        setMode(clrArr[Math.floor(Math.random()* clrArr.length)]);
    };
  return (
    <div style={{
        backgroundColor: mode,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        transition: 'background-color 0.5s ease-in-out',
    }}>
      <button onClick={changeMode} style={{
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '3em',
        transition: 'background-color 0.5s ease-in-out',
      }}>Color Mode: {mode}</button>
    </div>
  )
}

export default MultiMode
