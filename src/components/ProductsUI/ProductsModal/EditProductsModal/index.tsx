import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Produtos } from '../../../types';

interface EditProductsModalProps {
    show: Produtos,
    onHide: ()=> void,
    updateProduct: (id: number, products: Omit<Produtos, 'id'>) => void
}


const EditProductModal: React.FC<EditProductsModalProps> = ({show, onHide, updateProduct}) => {  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nome: show.nome,
      descricao: show.descricao,
      quantidade: show.quantidade,
      preco: show.preco
    },
    onSubmit: values => {
      updateProduct(show.id,{
        nome: values.nome,
        descricao: values.descricao,
        quantidade: Number(values.quantidade),
        preco: Number(values.preco),
      })
      onHide()
    }
  })

  return (
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Editar Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome</Form.Label>
          <Form.Control id="nome" type="text" placeholder="Nome do produto" value={formik.values.nome ?? ''} onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control id="quantidade" type="number" placeholder="Quantidade em estoque" value={formik.values.quantidade ?? ''} onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Preço</Form.Label>
          <Form.Control id="preco" type="number" placeholder="Valor do produto" value={formik.values.preco ?? ''} min="0,01" onChange={formik.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descrição</Form.Label>
          <Form.Control id="descricao" as="textarea" placeholder="Descrição do produto" value={formik.values.descricao ?? ''} onChange={formik.handleChange}/>
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

export default EditProductModal;