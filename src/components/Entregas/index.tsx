import UserNavbar from '../Navbar';
import EntregasTable from './Table';
import EntregasRequests from '../hooks/EntregasHooks/useEntregasRequests';
import EntregasModal from '../hooks/EntregasHooks/useEntregasModal';
import ModalCreateEntrega from './CreateModal';
import ModalEditEntrega from './EditModal';

const Entregas: React.FC = () => {
  const {
    entregas,
    handleCreateEntrega,
    handleUpdateEntrega,
    handleDeleteEntrega
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
        onDelete={handleDeleteEntrega}
        onClickEdit={handleOpenEditEntregasModal}
      />
      <ModalCreateEntrega
        show={entregasCreateModal}
        createEntrega={handleCreateEntrega}
        onHide={handleCloseCreateEntregasModal}
      />
      <ModalEditEntrega
        show={entregasEditModal}
        updateEntrega={handleUpdateEntrega}
        onHide={handleCloseEditEntregasModal}
      />
    </div>
  );
};

export default Entregas;