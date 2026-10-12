import React from 'react'

const Card = ({users, setToggle, deleteUser}) => { // 6. Destucture users  // 2. Destrcture deleteUser
  return (
    <div className='w-65 bg-zinc-700 mx-8 p-3 rounded-md overflow-hidden text-zinc-100 flex flex-col'>
      <div className="image w-full h-50 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src={users.image} alt="" /> // 7. impliment of map
      </div>
      <div className="details">
        <h2 className='text-lg font-semibold'>{users.name}</h2>
        <h4 className='text-base font-semibold'>{users.email}</h4>
        <h5 className='text-base font-semibold'>{users.number}</h5>
      </div>
      <div className="buttons flex justify-between cursor-pointer">
        <div onClick={()=>setToggle((prev)=>!prev)} className="updateBtn bg-amber-600 rounded px-1 py-1 text-sm font-semibold">Update</div>
        <div onClick={()=>deleteUser(users.id)} className="deletBtn bg-red-700 rounded px-1 py-1 text-sm font-semibold">Delete</div> // 3. call deleteUser.
      </div>
    </div>
  )
}

export default Card
