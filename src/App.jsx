import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 flex flex-col gap-5'>
      <Navbar/>
      <div className="flexCards flex flex-wrap gap-5">
      <Card/>
      </div>
    </div>
  )
}

export default App
