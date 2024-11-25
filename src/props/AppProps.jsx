import React from 'react'
import Hello from './Hello.jsx'
import Student from './Student.jsx'

function AppProps() {
    const textmsg = "Hello this is Props DATA through variable"
    const stdObj = {
        firstName: "Harry",
        lastName: "Potter",
        age: "5 years"
    }
  return (
    <div>
      {/* <Hello text = "Hello this is Props Data msg Through Attribute1." /> */}
      {/* <Hello text = {"Hello this is Props Data msg Through Attribute2."} /> */}
      <Hello text = {textmsg}  stdObj={stdObj} />
      {/* --------------- Multi attribute/props--------------------- */}
      <Student firstName = {"Peter"} lastName = {"Parker"} class={'10th'} age={"7 Years"}/>
      <Student firstName = {stdObj.firstName} lastName = {stdObj.lastName} class={'2nd'} age={stdObj.age}/>
    </div>
  )
}

export default AppProps;
