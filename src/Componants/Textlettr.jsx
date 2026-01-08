import React, { useState } from 'react'

function Textlettr() {
    const[dog,setDog]=useState("Defualt")
  return (
    <div>
        <h1>{dog}</h1>
      <button onClick={()=>setDog("welcome")}>hello</button><hr />
    </div>
  )
}

export default Textlettr
