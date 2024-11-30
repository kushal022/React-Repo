import React, { useEffect } from 'react'

// console.log('render again.....')
function DemoUseEffect(props) {
  console.log('render again compo.....')
    //1. Not provided
    // useEffect(()=>{
    //     console.log(`The name is ${props.name}`)
    // })

    //2. Provided : []
    // change data only one time / first loading
    // not change data after reloading
    useEffect(()=>{
        console.log(`The name is ${props.name}`)
    },[])
    
    //3. Provided with dependency array: [props.name]
    // useEffect(()=>{
    //     console.log(`The name is ${props.name}`)
    // },[props.name])
  return (
    <div>
      <h1>Demo of useEffect()</h1>
      <h3>Hello, {props.name}</h3>

    </div>
  )
}

export default DemoUseEffect
