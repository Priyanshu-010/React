import React from 'react'

const Lastname = (props) => {
  return (
    <div>
      <label >
        Lastname: 
      </label>
      <input
        type="text"
        value={props.lastName}
        onChange={(e) => props.onLastNameChange(e.target.value)}
      />
    </div>
  )
}

export default Lastname