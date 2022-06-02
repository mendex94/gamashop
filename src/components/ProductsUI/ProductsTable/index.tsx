import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { BsTrashFill, BsPenFill } from 'react-icons/bs'
import { Produtos } from '../../types'

interface UserTableProps {
    products: Produtos[],
    onClick: () => void,
    onDelete: (id: number) => void
    onClickEdit: (product: Produtos) => void
}

const ProductTable: React.FC<UserTableProps> = ({products, onClick, onDelete, onClickEdit}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
        <div className='d-flex flex-row justify-content-between pb-3'>
            <h1>Lista de produtos</h1>
            <Button variant="outline-success" onClick={onClick}>Adicionar produto</Button>
        </div>
        <Table striped borderless responsive hover variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            {products.map(product =>(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nome}</td>
                    <td>{product.descricao}</td>
                    <td>R${product.preco}</td>
                    <td>{product.quantidade}</td>
                    <td style={{width: '10 rem'}}>
                        <Button type='button'
                            variant='primary'
                            style={{marginRight: 5}}
                            onClick={()=> onClickEdit(product)}>
                                <BsPenFill size={18}/>
                        </Button>
                        <Button type='button'
                            variant='danger'
                            style={{marginRight: 5}}
                            onClick={() => onDelete(product.id)}>
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

export default ProductTable;
