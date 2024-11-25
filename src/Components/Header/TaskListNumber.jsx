import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400 '>
        <h2 className='text-2xl font-semibold '>{data.taskNumbers.newTask}</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400 '>
        <h2 className='text-2xl font-semibold '>{data.taskNumbers.completed}</h2>
        <h2 className='text-xl font-medium'>Completed Task</h2>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400 '>
        <h2 className='text-2xl font-semibold '>{data.taskNumbers.active}</h2>
        <h2 className='text-xl font-medium'>Accepted Task</h2>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 '>
        <h2 className='text-2xl font-semibold '>{data.taskNumbers.failed}</h2>
        <h2 className='text-xl font-medium'>Failed Task</h2>
      </div>
      
    </div>
  )
}

export default TaskListNumber
