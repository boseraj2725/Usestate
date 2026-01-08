import React from 'react'

function List() {
    const products =[
        {id:1, name:"Apple", price:50},
        {id:2, name:"Loptop", price:50000},
        {id:3, name:"Mobile", price:20000},
    ];
  return (
    <div style={{margin:'100px', textAlign:'center'}}>
        <h1>Products List</h1><ul>
      {products.map((item)=>(
      <div  style={{marginLeft:'42%'}}>
       <li style={{width:'160px' }}> {item.id} {item.name}-₹{item.price}</li>
        </div>
      ))}</ul><hr />
    </div>
  )
}

export default List
