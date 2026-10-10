import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-zinc-400 text-zinc-100 flex justify-between items-center px-15'>
      <div className="logo">
        <h1 className='font-bold text-xl'>Aftab</h1>
      </div>
      <nav className='flex gap-8 cursor-pointer'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="btn">
        <button className='bg-zinc-700 px-3 py-1 rounded outline-0 font-semibold cursor-pointer'>Create</button>
      </div>
    </div>
  )
}

export default Navbar
