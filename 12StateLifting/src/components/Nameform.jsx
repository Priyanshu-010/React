import React, { useState } from 'react'
import Firstname from '../components/Firstname.jsx'
import Lastname from './Lastname.jsx'
import Fullname from './Fullname.jsx'

const Nameform = () => {

  const [firstname, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  return (
    <>
      <h2>Name Form</h2>
      <Firstname firstname ={firstname} onFirstNameChange={setFirstname} />
      <Lastname lastname ={lastName} onLastNameChange={setLastname}/>
      <Fullname firstname={firstname} lastname={lastName}/>
    </>
  )
}

export default Nameform