import React, { useContext } from 'react'
import { AuthoContext } from '../../Context/AuthoProvider'

function AllTask() {

  const [userData,setUserData] = useContext(AuthoContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>
      <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between'>
        <h2 className='text-lg font-medium w-1/5 bg-emerald-400 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 bg-emerald-400'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 bg-emerald-400'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 bg-emerald-400'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 bg-emerald-400'>Failed</h5>
      </div>

      <div className=''>
        {userData.map(function (elem,idx) {
          return <div key={idx} className='border-2 border-emerald-400 bg-black mb-2 py-2 px-4 flex justify-between'>
            <h2 className='text-lg font-medium w-1/5 text-whitw-600 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
          </div>
        })}
      </div>


      {/* <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Varshit</h2>
        <h3>Youtube Clone</h3>
        <h5>Status</h5>
      </div>

      <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Varshit</h2>
        <h3>Youtube Clone</h3>
        <h5>Status</h5>
      </div>

      <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Varshit</h2>
        <h3>Youtube Clone</h3>
        <h5>Status</h5>
      </div>

      <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Varshit</h2>
        <h3>Youtube Clone</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  )
}

export default AllTask
