import React from 'react'
import DemoUseFectch from './DemoUseFectch'
function CustomHook() {
  // Fetching data from API using custom hook
  // here DemoUseFetch() custom hook
    const [data]  = DemoUseFectch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
    <h1>Custom Hook: useFetch();</h1>
      <ul>
          {data && data.map((item)=>{
              return <li key={item.id}>{item.id}: {item.title} </li>
          })}
      </ul>
  </div>
  )
}

export default CustomHook
