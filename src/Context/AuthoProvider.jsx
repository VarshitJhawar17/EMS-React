import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthoContext = createContext()

function AuthoProvider({children}){
  // localStorage.clear()
    const [userData,seUserData] = useState(null)
    
    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        seUserData(employees)
    },[])
  return (
    <div>
      <AuthoContext.Provider value={[userData,seUserData]} >
        {children}
      </AuthoContext.Provider>
    </div>
  )
}

export default AuthoProvider
   