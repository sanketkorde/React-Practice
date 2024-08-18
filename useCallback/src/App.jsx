import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
const [cnt,setCnt] = useState(0);

const Inc = ()=>{
  setCnt(cnt+1);
}
const dec = useCallback(
  ()=>{
    setCnt(cnt-1)
  },[]
)
  return (
    <>
    <h2>Start</h2>
    <button onClick={Inc} >Click Me{cnt}</button>
    <Navbar cnt={dec} />
    </>
  )
}

export default App
