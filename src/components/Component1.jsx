import React from 'react'
import Component2 from './Component2'

const Component1 = (props) => {
    const {user} = props
  return (
    <div>
      <Component2 />
    </div>
  )
}

export default Component1
