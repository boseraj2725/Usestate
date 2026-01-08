import React, { useState } from 'react'

function Usestate1() {
    const[use,setUse]=useState(false)
  return (
    <div>
        <h1>like😊</h1>
      {/*<button onClick={()=>setUse("red")} style={{color:use}} >
        {!use ? "Click" : "Not a Cilck"}</button><hr />*/}
        <button style={{color:use? "red":"yellow"}} onClick={()=>setUse(!use)}>{use? "cilck":"Not cilck"}</button><hr />
    </div>
  )
}

export default Usestate1
