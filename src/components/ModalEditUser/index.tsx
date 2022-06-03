import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Users } from '../types';

interface ModalEditUserProps {
  show: Users
  onHide: () => void
  updateUser: (id: number, users: Omit<Users, 'id'>) => void
}


const ModalEditUser: React.FC<ModalEditUserProps> = ({ show, onHide, updateUser }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nome: show.nome,
      cpf: show.cpf,
      endereco: show.endereco,
      email: show.email,
      telefone: show.telefone
    },
    onSubmit: values => {
      updateUser(show.id, {
        nome: values.nome,
        cpf: values.cpf,
        endereco: values.endereco,
        email: values.email,
        telefone: values.telefone
      })
      onHide()
    }
  })
  return (
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-5">
            <Form.Label>Nome</Form.Label>
            <Form.Control id="nome" type="text" placeholder="Nome completo" value={formik.values.nome} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>CPF</Form.Label>
            <Form.Control id="cpf" type="number" placeholder="Seu CPF" value={formik.values.cpf} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Endereço</Form.Label>
            <Form.Control id="endereco" type="text" placeholder="Seu endereço" value={formik.values.endereco} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Email</Form.Label>
            <Form.Control id="email" type="email" placeholder="Seu email" value={formik.values.email} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Telefone</Form.Label>
            <Form.Control id="telefone" type="text" placeholder="Seu telefone" value={formik.values.telefone} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group>
            <Button variant="success" type="submit" style={{ marginRight: 15 }}>Salvar</Button>
            <Button variant="danger" onClick={formik.handleReset}>Resetar</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditUser;