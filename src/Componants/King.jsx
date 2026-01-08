import React, { useState } from 'react'

function King() {
    const[god,setGod]=useState("red")
  return (
    <div>
      <h1 style={{color:god}}>color color</h1>
      <button onClick={()=>setGod("pink")}>God</button>
      <button onClick={()=>setGod("green")}>green</button>
      <button onClick={()=>setGod("red")}>Reset</button><hr />
    </div>
  )
}

export default King
