import { useState } from 'react';

import React from 'react'

function Mode() {
    const [mode, setMode] = useState('white')
    // method for toggle button
    const toggleMode = () => {
        setMode(mode === 'white'? 'black' : 'white')
    }


  return (
    <div style={{
        backgroundColor: mode,
        color: mode === 'white'? 'black' : 'white',
        padding: '20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.5s',
        width:'100vw',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
    }}>
      <h1>Change Background Mode Project</h1>
      <button onClick={toggleMode} style={{
        fontSize: '24px',
        backgroundColor: mode === 'white'?'black':'white',
        color: mode === 'white'?'white':'black',
        border: 'none',
        margin: '20px',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: '0.5s',
      }} >{mode === 'white'?'Dark Mode':'Light Mode'}</button>
    </div>
  )
}

export default Mode
