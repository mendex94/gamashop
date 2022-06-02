import { useState } from 'react'
import { Produtos } from '../../types'

function productModal() {
    const [addProductModal, setAddProductModal] = useState<boolean>(false)
    const [editProductModal, setEditProductModal] = useState<Produtos>({} as Produtos)

    const handleOpenAddProductModal = () => {
        setAddProductModal(true)
      }
    
      const handleCloseAddProductModal = () => {
        setAddProductModal(false)
      }
    
      const handleOpenEditProductModal = (product: Produtos) => {
        setEditProductModal(product)
      }
    
      const handleCloseEditProductModal = () => {
        setEditProductModal({} as Produtos)
      }

    return {
        addProductModal,
        handleOpenAddProductModal,
        handleCloseAddProductModal,
        editProductModal,
        handleOpenEditProductModal,
        handleCloseEditProductModal
    }
}

export default productModal