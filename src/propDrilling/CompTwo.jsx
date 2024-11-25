import React from 'react'
import CompThree from './CompThree'

function CompTwo(prop) {
  return (
    <div>
      <h1>Component B</h1>
      <CompThree f_name = {prop.f_name} />
    </div>
  )
}

export default CompTwo
