import UserNavbar from '../Navbar';
import EntregasTable from './Table';
import EntregasRequests from '../hooks/EntregasHooks/useEntregasRequests';
import EntregasModal from '../hooks/EntregasHooks/useEntregasModal';
import ModalCreateEntrega from './CreateModal';
import ModalEditEntrega from './EditModal';

const Entregas: React.FC = () => {
  const {
    entregas,
    handleCreateEntregas,
    handleUpdateEntregas,
    handleDeleteEntregas
  } = EntregasRequests();

  const {
    entregasCreateModal,
    handleOpenCreateEntregasModal,
    handleCloseCreateEntregasModal,
    entregasEditModal,
    handleOpenEditEntregasModal,
    handleCloseEditEntregasModal
  } = EntregasModal();

  return (
    <div id='entregas' className="App">
      <UserNavbar />
      <EntregasTable
        Entregas={entregas}
        onClick={ handleOpenCreateEntregasModal}
        onDelete={handleDeleteEntregas}
        onClickEdit={handleOpenEditEntregasModal}
      />
      <ModalCreateEntrega
        show={entregasCreateModal}
        createEntrega={handleCreateEntregas}
        onHide={handleCloseCreateEntregasModal}
      />
      <ModalEditEntrega
        show={entregasEditModal}
        updateEntrega={handleUpdateEntregas}
        onHide={handleCloseEditEntregasModal}
      />
    </div>
  );
};

export default Entregas;