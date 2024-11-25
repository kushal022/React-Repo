import React from 'react'

export default function Hello(props) {
    const msg = props.text;
    const stdObj = props.stdObj;
    console.log(props.stdObj)
    console.log(props.text)
  return (
    <div>
      <h1>Hello, This is Props</h1>
      <h3>1st msg: {props.text}</h3>
      <h3>2nd msg: {msg}</h3>
      {/* data from object when object pass into props */}
      <h3>Name: {stdObj.firstName}</h3>
      <h3>Last Name: {stdObj.lastName}</h3>
      {/* for Default Props */}
      <h3>Full Name: {props.fullName}</h3>
    </div>
  )
}


// Default props:
 Hello.defaultProps = {
  fullName: 'Peter Parker Default Name'
 }

// PropsTypes:
// Hello.propTypes = {
//   // msg: propTypes.number,
// }