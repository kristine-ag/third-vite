import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import useUser from '../hooks/useUser'

const Component3 = () => {
    const { user } = useUser()

    // const {user} = useContext(UserContext)
    // console.log(user)
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
}

export default Component3
