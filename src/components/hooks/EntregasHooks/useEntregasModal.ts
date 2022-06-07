import { useState } from 'react'
import { Entregas } from '../../types'

function EntregasModal() {
  const [entregasCreateModal, setEntregasCreateModal] = useState<boolean>(false);
  const [entregasEditModal, setEntregasEditModal] = useState<Entregas>({} as Entregas);

  const handleOpenCreateEntregasModal = () => {
    setEntregasCreateModal(true);
  };

  const handleCloseCreateEntregasModal = () => {
    setEntregasCreateModal(false);
  };

  const handleOpenEditEntregasModal = (entregas: Entregas) => {
    setEntregasEditModal(entregas)
  };

  const handleCloseEditEntregasModal = () => {
    setEntregasEditModal({} as Entregas)
  };

  return {
    entregasCreateModal,
    handleOpenCreateEntregasModal,
    handleCloseCreateEntregasModal,
    entregasEditModal,
    handleOpenEditEntregasModal,
    handleCloseEditEntregasModal
  };
};

export default EntregasModal;