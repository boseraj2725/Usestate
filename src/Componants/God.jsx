import React, { useState } from 'react'

function Text() {
     const[god,setGod]=useState("red")
    return (
        <div>
            <div>
                <h1 style={{ color: god }}>Text Color</h1>
                <h1 onClick={() => setGod("pink")}>pink</h1>
                <h1 onClick={() => setGod("green")}>green</h1>
                <button onClick={() => setGod("red")}>Reset</button><hr />
            </div>
        </div>
    )
}
export default Text