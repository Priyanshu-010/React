import React from 'react'

const button = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <button onClick={props.HandleClick}>
        {props.text}
      </button>
    </div>
  )
}

export default button