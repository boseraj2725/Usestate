import React, { useState } from 'react'

function Usesate2() {
    const[name,setName]=useState()
    const[age,setAge]=useState()
  return (
    <div>
        <h1>text:</h1>
      <input placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br/>
      <input type='number' placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
      <p>{name}-{age}</p><hr/>
    </div>
  )
}

export default Usesate2
