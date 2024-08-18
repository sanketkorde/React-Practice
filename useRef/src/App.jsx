import { useEffect,useState,useRef } from 'react';
import './App.css'

function App() {
  const [cnt,setCnt] = useState(0);

  const Inc = ()=>{
      setCnt(cnt+1);
  }
  const a = useRef(-1);
  const btnRef = useRef();
  a.current = a.current+1
  useEffect( ()=> {
    btnRef.current.style.backgroundColor = "red"
      return ()=>{
         console.log("First Render")
      }
    },[]
  );

  return (
    <>
   <h1>{a.current}</h1>
    <button ref={btnRef} onClick={Inc}>Count {cnt}</button>
    </>
  )
}

export default App
