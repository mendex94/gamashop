import userModal from './components/hooks/userModal'
import userRequests from './components/hooks/userRequests'
import ModalCreateUser from './components/Modal'
import ModalEditUser from './components/ModalEditUser'
import UserNavbar from './components/Navbar'
import UserTable from './components/UserTable'


function App(): JSX.Element {
  const {
    userList,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
  } = userRequests()

  const {
    userCreateModal,
    handleOpenCreateUserModal,
    handleCloseCreateUserModal,
    userEditModal,
    handleOpenEditUserModal,
    handleCloseEditUserModal
  } = userModal()

  return (
    <div className="App">
      <UserNavbar />
      <UserTable
        users={userList}
        onClick={handleOpenCreateUserModal}
        onClickEdit={handleOpenEditUserModal}
        onDelete={handleDeleteUser}
      />
      <ModalCreateUser
        show={userCreateModal}
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
      <ModalEditUser
        show={userEditModal}
        updateUser={handleUpdateUser}
        onHide={handleCloseEditUserModal}
      />
    </div>
  )
}

export default App;