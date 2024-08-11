import React, { useEffect, useState } from 'react'


function App() {
  const[windowWid, setwindowWid] = useState(window.innerWidth);

 const widthChanger=()=>{
    setwindowWid(window.innerWidth);
  } 

  useEffect(()=>{
    window.addEventListener("resize",widthChanger);
    return()=>{
      window.removeEventListener("resize",widthChanger);
    }
  },[])
  return (
    <>
    <h1>{windowWid}</h1>
    </>
  )
}

export default App
