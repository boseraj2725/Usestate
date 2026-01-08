import React, { useState } from 'react'

function Jinwoo1() {
    const[ak47,setAk47]=useState("")
  return (
    <div>
      <input value={ak47}onChange={(e)=>setAk47(e.target.value)}/>
      <p>love me...{ak47}</p><hr/>
    </div>
  )
}

export default Jinwoo1
