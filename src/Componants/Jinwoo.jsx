import {useState} from 'react'

function Jinwoo() {
    const[Note,setNote]=useState(0)
    const[Note1,setNote1]=useState(10)
  return (  
    <div>
      <button onClick={()=>setNote(Note+1)}>Love{Note}</button>
      <button onClick={()=>setNote1(Note1-1)}>Love{Note1}</button>
      <button onClick={()=>setNote(0)}>Reset</button>
      <button onClick={()=>setNote1(10)}>Reset1</button><hr />
    </div>
  )
}
export default Jinwoo
