import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const useUser = () => useContext(UserContext)

export default useUser
