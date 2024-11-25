import React from 'react'
import Header from '../Header/Header'
import CreateTask from '../Header/CreateTask'
import AllTask from '../Header/AllTask'

function AdminDashboard({changeUser}) {
    return (
        <div className='h-screen w-full p-10 '>
            <Header changeUser={changeUser}/>
            <CreateTask/>
            <AllTask/>
            
        </div>
    )
}

export default AdminDashboard
