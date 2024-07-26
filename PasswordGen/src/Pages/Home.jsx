import React from 'react'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <div className=' w-full h-screen '>
            <img className='h-screen w-full' 
            src="https://images3.alphacoders.com/132/1328547.png" 
            alt="img.jpg" />
        </div>
    </div>
  )
}
export default Home
