import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/LocalStorage'

function Header({data, changeUser}){

  // const [userName,setUserName] = useState('')

  // if(!data){
  //   setUserName("admin")
  // }else{
  //   setUserName(data.firstName)
  // }

  function LogOutUser(){
    localStorage.setItem('LoggedInUser','')
    changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br/>  <span className='text-3xl font-semibold'>userName</span>
      </h1>
      <button onClick={LogOutUser} className='bg-red-500 text-white px-3 py-2  text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
