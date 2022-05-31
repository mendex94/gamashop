import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { BsTrashFill, BsPenFill } from 'react-icons/bs'
import { Users } from '../types'

interface UserTableProps {
    users: Users[],
    onClick: () => void,
    onDelete: (id: number) => void
}

const UserTable: React.FC<UserTableProps> = ({users, onClick, onDelete}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
    <div className='d-flex flex-row justify-content-between pb-3'>
    <h1>Lista de usuarios</h1>
    <Button variant="outline-success" onClick={onClick}>Adicionar usuario</Button>
    </div>
    <Table striped borderless responsive hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.cpf}</td>
            <td>{user.endereco}</td>
            <td>{user.email}</td>
            <td>{user.telefone}</td>
            <td style={{width: '10 rem'}}>
                <Button type='button'
                        variant='primary'
                        style={{marginRight: 5}}
                        onClick={() => {}}>
                            <BsPenFill size={18}/>
                        </Button>
                <Button type='button'
                        variant='danger'
                        style={{marginRight: 5}}
                        onClick={() => onDelete(user.id)}>
                            <BsTrashFill size={18}/>
                        </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  );
}

export default UserTable;
