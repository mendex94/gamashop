import { Button, Container, Table } from 'react-bootstrap';
import { BsTrashFill, BsPenFill } from 'react-icons/bs';
import { Entregas } from '../../types';

interface EntregasTableProps {
  Entregas: Entregas[],
  onClick: () => void,
  onDelete: (id: number) => void
  onClickEdit: (Entregas: Entregas) => void
};

const EntregasTable: React.FC<EntregasTableProps> = ({ Entregas, onClick, onDelete, onClickEdit }) => {
  return (
    <Container fluid="sm" style={{ marginTop: 25 }}>
      <div className='d-flex flex-row justify-content-between pb-3'>
        <h1>Lista de Entregases</h1>
        <Button variant="outline-success" onClick={onClick}>
          Adicionar Entregas
        </Button>
      </div>
      <Table striped borderless responsive hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Transportadora</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {Entregas.map(Entregas => (
            <tr key={Entregas.id}>
              <td>{Entregas.id}</td>
              <td>{Entregas.transportadora}</td>
              <td>{Entregas.cnpj}</td>
              <td>{Entregas.endereco}</td>
              <td>{Entregas.email}</td>
              <td>{Entregas.telefone}</td>
              <td>
                <Button type='button'
                  variant='primary'
                  style={{ marginRight: 5 }}
                  onClick={() => onClickEdit(Entregas)}>
                  <BsPenFill size={18} />
                </Button>
                <Button type='button'
                  variant='danger'
                  onClick={() => onDelete(Entregas.id)}>
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

export default EntregasTable;