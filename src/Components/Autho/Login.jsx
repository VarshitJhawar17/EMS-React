import React, { useState } from 'react'

function Login({HandleLogin}){

    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')

    function HandleSubmit(event){
        event.preventDefault()
        HandleLogin(Email,Password)
        setEmail('')
        setPassword('')
        
        
    }

  return (
    <div className='flex h-[600px] items-center justify-center '> 
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
                onSubmit={(event) => {
                    HandleSubmit(event)
                }}
                className=' flex flex-col items-center justify-center'>
                <input
                    value={Email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                     required className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl  ouline-none bg-transparent placeholder:text-grey-400' type='email' placeholder='Enter Email'/>
                <input
                    value={Password} 
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }} 
                    required className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl  ouline-none bg-transparent placeholder:text-grey-400 mt-3' type='password' placeholder='Password' />
                <button className='mt-5 bg-emerald-600 rounded-full px-5 py-3 text-xl text-white ouline-none  placeholder:text-white mt-3'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
