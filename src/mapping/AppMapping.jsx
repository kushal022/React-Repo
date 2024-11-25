import React from 'react'
import Mapping from './Mapping.jsx'
import Mapping2 from './Mapping2.jsx'

var nums = [1,2,3, 4]
var fruits = ['Apple', 'Banana', 'Cherry', 'Dragonfruit']
var emp = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 35,
  },
  {
    id: 4,
    name: "Johnson",
    age: 39,
  },
];

function AppMapping() {
  return (
    <div>
      <h1>Mapping Array to List</h1>
      {/* <Mapping numsList = {nums} fruitsList = {fruits} empList = {emp}  /> */}
      <Mapping2 />
    </div>
  )
}

export default AppMapping
