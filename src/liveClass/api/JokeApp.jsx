// initial version:
import React, { useState, useEffect } from 'react'
import './style.css'
function JokeApp() {
  const [data, setData] = useState({
    id: '',
    type: '',
    setup: '',
    punchline: '',
  });

  const fetchData = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const dataRes = await res.json();
    setData({
      id: dataRes.id,
      type: dataRes.type,
      setup: dataRes.setup,
      punchline: dataRes.punchline,
    });
  };

  useEffect(() => {
    fetchData();
  }, [])

  const generateHandler = (e) => {
    e.preventDefault();
    console.log('clik')
    fetchData();
  }


  return (
    <div className='box-joke'>

      <h1 style={{ color: 'black', textTransform: 'uppercase' }}>Random Joke Generator</h1>
      <div className='joke-display'>
        <h1 style={{ color: 'black' }}>Setup</h1>
        <h1> {data.setup}</h1>
        <h1 style={{ color: 'black' }}>Punchline</h1>
        <h1> {data.punchline}</h1>
      </div>
      <button onClick={generateHandler}>Generate Joke</button>
    </div>
  )
}

export default JokeApp

