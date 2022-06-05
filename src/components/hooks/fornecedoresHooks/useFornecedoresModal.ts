import { useState } from 'react'
import { Fornecedor } from '../../types'

function useFornecedoresModal() {
  const [fornecedorCreateModal, setFornecedorCreateModal] = useState<boolean>(false);
  const [fornecedorEditModal, setFornecedorEditModal] = useState<Fornecedor>({} as Fornecedor);

  const handleOpenCreateFornecedorModal = () => {
    setFornecedorCreateModal(true);
  };

  const handleCloseCreateFornecedorModal = () => {
    setFornecedorCreateModal(false);
  };

  const handleOpenEditFornecedorModal = (fornecedor: Fornecedor) => {
    setFornecedorEditModal(fornecedor)
  };

  const handleCloseEditFornecedorModal = () => {
    setFornecedorEditModal({} as Fornecedor)
  };

  return {
    fornecedorCreateModal,
    handleOpenCreateFornecedorModal,
    handleCloseCreateFornecedorModal,
    fornecedorEditModal,
    handleOpenEditFornecedorModal,
    handleCloseEditFornecedorModal
  };
};

export default useFornecedoresModal;