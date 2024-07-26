import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import PasswordGen from './Pages/PasswordGen'
import Nopage from './Pages/Nopage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} ></Route>
        <Route path='/about' element ={<About></About>}></Route>
        <Route path='/home' element ={<Home></Home>}></Route>
        <Route path='/PasswordGenrator' element ={<PasswordGen></PasswordGen>}></Route>
        <Route path='*' element={<Nopage></Nopage>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
