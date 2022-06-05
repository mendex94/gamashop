import { Button, Container, Table } from 'react-bootstrap';
import { BsTrashFill, BsPenFill } from 'react-icons/bs';
import { Fornecedor } from '../../types';

interface FornecedoresTableProps {
  fornecedores: Fornecedor[],
  onClick: () => void,
  onDelete: (id: number) => void
  onClickEdit: (fornecedor: Fornecedor) => void
};

const FornecedoresTable: React.FC<FornecedoresTableProps> = ({ fornecedores, onClick, onDelete, onClickEdit }) => {
  return (
    <Container fluid="sm" style={{ marginTop: 25 }}>
      <div className='d-flex flex-row justify-content-between pb-3'>
        <h1>Lista de Fornecedores</h1>
        <Button variant="outline-success" onClick={onClick}>
          Adicionar Fornecedor
        </Button>
      </div>
      <Table striped borderless responsive hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {fornecedores.map(fornecedor => (
            <tr key={fornecedor.id}>
              <td>{fornecedor.id}</td>
              <td>{fornecedor.razaoSocial}</td>
              <td>{fornecedor.cnpj}</td>
              <td>{fornecedor.endereco}</td>
              <td>{fornecedor.email}</td>
              <td>{fornecedor.telefone}</td>
              <td>
                <Button type='button'
                  variant='primary'
                  style={{ marginRight: 5 }}
                  onClick={() => onClickEdit(fornecedor)}>
                  <BsPenFill size={18} />
                </Button>
                <Button type='button'
                  variant='danger'
                  onClick={() => onDelete(fornecedor.id)}>
                  <BsTrashFill size={18} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FornecedoresTable;