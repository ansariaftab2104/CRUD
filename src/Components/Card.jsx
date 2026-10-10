import React from 'react'

const Card = () => {
  return (
    <div className='w-65 bg-zinc-700 mx-12 p-3 rounded-md overflow-hidden text-zinc-100 flex flex-col gap-3'>
      <div className="image w-full h-50 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1788462538259-1e72a24c8632?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      </div>
      <div className="details">
        <h2 className='text-lg font-semibold'>Aftab Ansari</h2>
        <h4 className='text-base font-semibold'>aftab23@gmail.com</h4>
        <h5 className='text-base font-semibold'>7021857988</h5>
      </div>
      <div className="buttons flex justify-between cursor-pointer">
        <div className="updateBtn bg-amber-600 rounded px-1 py-1 text-sm font-semibold">Update</div>
        <div className="deletBtn bg-red-700 rounded px-1 py-1 text-sm font-semibold">Delete</div>
      </div>
    </div>
  )
}

export default Card
