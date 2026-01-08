import React, { useState } from 'react'

function ShowHide() {
    const[show,setShow]=useState(false)
  return (
    <div>
        {show && <h1>good work</h1>}
      <button onClick={()=>setShow(!show)}>ok</button> <hr/>
    </div>
  )
}

export default ShowHide
