import UserNavbar from '../Navbar';
import FornecedoresTable from './Table';
import useFornecedoresRequests from '../hooks/fornecedoresHooks/useFornecedoresRequests';
import useFornecedoresModal from '../hooks/fornecedoresHooks/useFornecedoresModal';
import ModalCreateFornecedor from './CreateModal';
import ModalEditFornecedor from './EditModal';

const Fornecedores: React.FC = () => {
  const {
    fornecedores,
    handleCreateFornecedor,
    handleUpdateFornecedor,
    handleDeleteFornecedor
  } = useFornecedoresRequests();

  const {
    fornecedorCreateModal,
    handleOpenCreateFornecedorModal,
    handleCloseCreateFornecedorModal,
    fornecedorEditModal,
    handleOpenEditFornecedorModal,
    handleCloseEditFornecedorModal
  } = useFornecedoresModal();

  return (
    <div id='fornecedores' className="App">
      <UserNavbar />
      <FornecedoresTable
        fornecedores={fornecedores}
        onClick={handleOpenCreateFornecedorModal}
        onDelete={handleDeleteFornecedor}
        onClickEdit={handleOpenEditFornecedorModal}
      />
      <ModalCreateFornecedor
        show={fornecedorCreateModal}
        createFornecedor={handleCreateFornecedor}
        onHide={handleCloseCreateFornecedorModal}
      />
      <ModalEditFornecedor
        show={fornecedorEditModal}
        updateFornecedor={handleUpdateFornecedor}
        onHide={handleCloseEditFornecedorModal}
      />
    </div>
  );
};

export default Fornecedores;