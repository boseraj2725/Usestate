import React from 'react'
import { useState } from 'react'

function BackGround() {
    const[back,setBack]=useState("white")
  return (
    <div style={{background:back, width:'100%', height:200}}>
      <button onClick={()=>setBack("red")}>Red</button>
      <button onClick={()=>setBack("Green")}>Green</button>
      <button onClick={()=>setBack("yellow")}>Yellow</button><hr />
    </div>
  )
}

export default BackGround
