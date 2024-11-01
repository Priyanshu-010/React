import React from 'react'

const Firstname = (props) => {
  return (
    <div>
      <label >
        Firstname: 
      </label>
      <input
        type="text"
        value={props.firstname}
        onChange={(e) => props.onFirstNameChange(e.target.value)}
      />
    </div>
  )
}

export default Firstname