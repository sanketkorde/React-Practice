import './App.css'
import Profile from "./Profile"
let name = ["sanket","Rohit","Vaibhav","Harry","Jacob"]
function App() {

  return (
    <>
      {name.map((name, index) => (
        <Profile key={index} name={name} />
      ))}
    </>
  )
}

export default App
