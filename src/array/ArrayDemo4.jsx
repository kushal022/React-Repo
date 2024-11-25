import React from 'react'

function ArrayDemo4() {
    const studentData = [{
        id: 1,
        name : 'Peter Parker',
        pass: true,
    },
    {
        id: 22,
        name : 'Thor',
        pass: true,
    },
    {
        id: 20,
        name : 'Black Widow',
        pass: true,
    },
    {
        id: 2,
        name : 'Hulk',
        pass: false,
    },
    {
        id: 11,
        name : 'Wanda',
        pass: true,
    },
    {
        id: 12,
        name : 'Iron Man',
        pass: true,
    },
]

    const data = studentData.map((data)=> (
        <li key={data.id}>
            {data.pass?<span>{data.name}: Passed</span>:<span>{data.name}: Failed</span>}
        </li>
    )) 
  return (
    <div>
      <h1>Conditions in Array with map method</h1>
      <ul>{data}</ul>
    </div>
  )
}

export default ArrayDemo4
