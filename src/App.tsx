import { useEffect, useState } from 'react'
import { createUser, deleteUser, editUser, renderUser, renderUsers } from './components/api'
import ModalCreateUser from './components/Modal'
import ModalEditUser from './components/ModalEditUser'
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

 
  const handleDeleteUser = async (id: number) => {
    await deleteUser(id)
    setUsers(
      oldUserList => oldUserList.filter(user => user.id !== id)
    )
  }

  const [userCreateModal, setUserCreateModal] = useState<boolean>(false)
  
  const [userEditModal, setUserEditModal] = useState<boolean>(false)

  const handleOpenCreateUserModal = () => {
    setUserCreateModal(true)
  }

  const handleCloseCreateUserModal = () => {
    setUserCreateModal(false)
  }

  const handleOpenEditUserModal = () => {
    setUserEditModal(true)
  }
  
  const handleCloseEditUserModal = () => {
    setUserEditModal(false)
  }

  return (
    <div className="App">
      <UserNavbar />
      <UserTable
        users={userList}
        onClick={handleOpenCreateUserModal}
        onDelete={handleDeleteUser}
        onEdit={handleOpenEditUserModal}  
      />
      <ModalCreateUser
        show={userCreateModal}
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
      <ModalEditUser 
        show={userEditModal}
        editUser={() => {}}
        onHide={handleCloseEditUserModal}
      />
    </div>
  )
}

export default App;