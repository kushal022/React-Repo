import React,{useState} from 'react'
import { useEffect } from 'react';

function DemoFetch() {
   // Old way:
   const [data, setData] = useState(null);
   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/todos')
       .then((res)=>res.json())
       .then((data)=>setData(data))
   })
 return (
   <div>
     <h1>Fetch(): Old method[without Custom Hook :useFectch()]</h1>
       <ul>
           {data && data.map((item)=>{
               return <li key={item.id}>{item.id}: {item.title} </li>
           })}
       </ul>
    

   </div>
 )
}

export default DemoFetch
