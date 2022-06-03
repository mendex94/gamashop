import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Produtos } from '../../../types';

interface AddProductsModalProps {
    show: boolean
    onHide: ()=> void
    addProduct: (users: Omit<Produtos, 'id'>) => void
}


const AddProductModal: React.FC<AddProductsModalProps> = ({show, onHide, addProduct}) => {
    const formik = useFormik({
        initialValues: {
          nome: '',
          descricao: '',
          quantidade: '0',
          preco: '0,01'
        },
        onSubmit: values => {
          addProduct({
            nome: values.nome,
            descricao: values.descricao,
            quantidade: Number(values.quantidade),
            preco: Number(values.preco),
          })
          onHide()
        }
      })
    return (
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Criar Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome</Form.Label>
          <Form.Control id="nome" type="text" placeholder="Nome do produto" value={formik.values.nome} onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control id="quantidade" type="number" placeholder="Quantidade em estoque" value={formik.values.quantidade} onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Preço</Form.Label>
          <Form.Control id="preco" type="number" placeholder="Valor do produto" value={formik.values.preco} min="0,01" onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descrição</Form.Label>
          <Form.Control id="descricao" as="textarea" placeholder="Descrição do produto" value={formik.values.descricao} onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Button variant="success" type="submit" style={{marginRight: 15}}>Salvar</Button>
          <Button variant="danger" onClick={formik.handleReset}>Resetar</Button>
        </Form.Group>
      </Form>
    </Modal.Body>
  </Modal>
  );
}

export default AddProductModal;