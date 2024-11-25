import React, { useContext, useState } from 'react'
import { AuthoContext } from '../../Context/AuthoProvider'

function CreateTask() {

    const [userData,setUserData] = useContext(AuthoContext)

    const [taskTitle, setaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setasignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newtask,setnewtask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setnewtask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

        const data = userData
        data.forEach((elem) => {
            if(asignTo == elem.firstName){
                elem.tasks.push(newtask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1                
            }
        });

        setUserData(data)
        console.log(data)

        settaskDate('')
        setasignTo('')
        settaskDescription('')
        setcategory('')
        setaskTitle('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full  items-start justify-between'>
                <div className='w-1/2 '>
                    <div>
                        <h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='text' placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                settaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='date' />
                    </div>
                    <div>
                        <h3 className='text-sm text-grey-300 mb-0.5'>Asign To</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setasignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='text' placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-grey-300 mb-0.5'>Catagory</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='text' placeholder='Design/Dev/...' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            settaskDescription(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' name='' id='' cols="30" rows="10" ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Creat Task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask
