import React from 'react'

function Test1() {
    const student=[
        {no:1, name:"Nandha", mark:'200%', },
        {no:2, name:"Boseraj", mark:'200%',},
        {no:3, name:"Thiyaga", mark:'200%',},
    ]
  return (
    <div>
      {student.map((good)=>(
        <div style={{marginLeft:'42%'}}>
            <ul>
          <li style={{width:'160px'}}> {good.name}-mark{good.mark}</li>
          </ul>
        </div>
      ))} <hr/>
    </div>
  )
}

export default Test1
