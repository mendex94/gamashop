import { useEffect, useState } from 'react'
import { createUser, deleteUser, editUser, renderUsers } from './components/api'
import ModalCreateUser from './components/Modal'
import UserNavbar from './components/Navbar'
import { Users } from './components/types'
import UserTable from './components/UserTable'


function App() {

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

  const handleEditUser = async (user: Users) => {
    await editUser(user)
  }

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id)
    setUsers(
      oldUserList => oldUserList.filter(user => user.id !== id)
    )
  }

  const [userCreateModal, setUserCreateModal] = useState<boolean>(false)

  const handleOpenCreateUserModal = () => {
    setUserCreateModal(true)
  }
  
  const handleCloseCreateUserModal = () => {
    setUserCreateModal(false)
  }

  return (
    <div className="App">
      <UserNavbar />
      <UserTable 
        users={userList}
        onClick={handleOpenCreateUserModal}
        onDelete={handleDeleteUser}  
      />
      <ModalCreateUser 
        show={userCreateModal}
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
    </div>
  )
}

export default App
