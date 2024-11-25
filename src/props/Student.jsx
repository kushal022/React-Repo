import React from 'react'

function Student(props) {
  return (
    <div>
        <hr />
        <h1>Student Data:</h1>
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Class: {props.class}</h3>
        {/* <h3>obj: {props.stdObj.firstName}</h3> */}
    </div>
  )
}

export default Student
