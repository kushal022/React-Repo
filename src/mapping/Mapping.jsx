import React from 'react'

function Mapping(props) {
    var fruits = props.fruitsList.map(item => (
        <li key={item.toString()}>{item}</li>
    ))
    var nums = props.numsList.map(n=>(
       <li key={n.toString()}>{n}</li>
    ))
    var emp = props.empList.map(e=>(
      //  <li key={e.toString()}>{e.name} :- {e.age}</li>
      <Employee name={e.name} id={e.id} age={e.age} />
    ))
  return (
    <div>
      <h3>Fruits List</h3>
      <ul>{fruits}</ul>
      <h3>Number List</h3>
      <ul>{nums}</ul>
      <h3>Employee List</h3>
      <ul>{emp}</ul>
    </div>
  )
}


function Employee(props){
  return (
    <li>Name: {props.name}, Id: {props.id}, age: {props.age} </li>
  )
}

export default Mapping
