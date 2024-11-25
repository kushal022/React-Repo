import React from 'react'
import CompTwo from './CompTwo';

function CompOne(prop) {
  return (
    <div>
      <h1>Component A</h1>
      <h4 style={{color:'yellow'}}>This is First Name: {prop.f_name} </h4>
      <CompTwo f_name ={prop.f_name} />
    </div>
  )
}

export default CompOne;
