import React, { useState } from 'react'

function Hide() {
    const[name,setName]=useState(true)
  return (
    <div>
        {name ?<h1>Welcome To All ❤️</h1> : null }
      <button onClick={()=>setName(!name)}>
        {name ? "hide" : "show"}
      </button> <hr />
    </div>
  )
}

export default Hide
