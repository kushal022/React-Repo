import React, { useEffect, useState } from 'react'

// New way: Custom Hook (here DemoUseFectch() is custom hook)
// Making Custom Hook
function DemoUseFectch(url) {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[url])
  return [data]
}

export default DemoUseFectch
