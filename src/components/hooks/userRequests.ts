import { useEffect, useState } from 'react'
import { createUser, deleteUser, renderUsers, updateUser } from '../api'
import { Users } from '../types'

function userRequests() {
    const [userList, setUsers] = useState<Users[]>([] as Users[])

    useEffect(() => {
      renderUsers().then(users => setUsers(users))
    }, [])
  
  
    const handleCreateUser = async (user: Omit<Users, "id">) => {
      const newUser = await createUser(user)
      setUsers(
        oldUserList => [...oldUserList, newUser]
      )
    }
  
  
    const handleDeleteUser = async (id: number) => {
      await deleteUser(id)
      setUsers(
        oldUserList => oldUserList.filter(user => user.id !== id)
      )
    }
  
    const handleUpdateUser = async (id: number, user: Omit<Users, "id">) => {
      const newUser = await updateUser(id, user)
      setUsers(
        oldUserList => oldUserList.map(
          oldUser => oldUser.id === newUser.id ? newUser : oldUser
        )
      )
    }

    return {
        userList,
        handleCreateUser,
        handleUpdateUser,
        handleDeleteUser
    }
}
export default userRequests