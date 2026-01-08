import React, { useState } from 'react'

function Login() {
    const[hello,setHello]=useState(true)
  return (
    <div>
        <h1>{hello?"welcome" : "logout" }</h1>
      <button onClick={()=>setHello(!hello)}>{hello? "login": "logout"}</button><hr />
    </div>
  )
}

export default Login
