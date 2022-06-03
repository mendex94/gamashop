import { useState } from 'react'
import { Users } from '../types'

function userModal() {
    const [userCreateModal, setUserCreateModal] = useState<boolean>(false)
    const [userEditModal, setUserEditModal] = useState<Users>({} as Users)

    const handleOpenCreateUserModal = () => {
        setUserCreateModal(true)
      }
    
      const handleCloseCreateUserModal = () => {
        setUserCreateModal(false)
      }
    
      const handleOpenEditUserModal = (user: Users) => {
        setUserEditModal(user)
      }
    
      const handleCloseEditUserModal = () => {
        setUserEditModal({} as Users)
      }

    return {
        userCreateModal,
        handleOpenCreateUserModal,
        handleCloseCreateUserModal,
        userEditModal,
        handleOpenEditUserModal,
        handleCloseEditUserModal
    }
}

export default userModal