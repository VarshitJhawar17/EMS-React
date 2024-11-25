import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../Header/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({data, changeUser}){  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
        <Header changeUser={changeUser} data = {data}/>
        <TaskListNumber data = {data}/>
        <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
