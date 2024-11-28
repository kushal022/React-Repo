import React, { useState } from 'react'

function UseStateDemo() {
    const [count, setCount] = useState(0);
    //update count value by setcount
    const incrementCount = ()=>{
        // setCount(count + 1)
        setCount(count + 3)
    }
  return (
    <div>
      <h1>useState() Hook:</h1>
      <h2>Counter App</h2>
      <h1>{count} </h1>
      <button 
        onClick={incrementCount} 
        style={{
            backgroundColor: count % 2 === 0? 'lightblue' : 'pink',
            color: count % 2 === 0? 'white' : 'black',
            padding: 10,
            borderRadius: 5,
            fontSize: 20,
            cursor: 'pointer'
        }}
        >Increment Count</button>
      <button 
        onClick={()=>setCount(count - 3)} 
        style={{
            backgroundColor: count % 2 === 0? 'lightblue' : 'pink',
            color: count % 2 === 0? 'white' : 'black',
            padding: 10,
            borderRadius: 5,
            fontSize: 20,
            cursor: 'pointer',
            marginLeft:'15px'
        }}
        >Decrement Count</button>
    </div>
  )
}

export default UseStateDemo
