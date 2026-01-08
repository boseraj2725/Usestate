import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jinwoo from './Componants/Jinwoo'
import Jinwoo1 from './Componants/Jinwoo1'
import King from './Componants/King'
import Textlettr from './Componants/Textlettr'
import ShowHide from './Componants/ShowHide'
import BackGround from './Componants/BackGround'
import Hide from './Componants/Hide'
import List from './Componants/List'
import Test1 from './Componants/Test1'
import Login from './Componants/Login'
import Usestate1 from './Componants/Usestate1'
import Usesate2 from './Componants/Usesate2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Jinwoo />
      <Jinwoo1 />
      <King />
      <BackGround />
      <Textlettr />
      <ShowHide />
      <Hide />
      <List />
      <Test1 />
      <Login />
      <Usestate1 />
      <Usesate2/>
    </div>
  )
}

export default App
