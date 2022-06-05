import { Modal, Form, Button } from 'react-bootstrap'
import { Fornecedor } from '../../types';
import { useFormik } from 'formik';

interface ModalCreateFornecedorProps {
  show: boolean,
  onHide: () => void,
  createFornecedor: (fornecedor: Omit<Fornecedor, 'id'>) => void
};

const ModalCreateFornecedor: React.FC<ModalCreateFornecedorProps> = ({ show, onHide, createFornecedor }) => {
  const formik = useFormik({
    initialValues: {
      razaoSocial: '',
      cnpj: '',
      endereco: '',
      email: '',
      telefone: ''
    },
    onSubmit: values => {
      createFornecedor({
        razaoSocial: values.razaoSocial,
        cnpj: values.cnpj,
        endereco: values.endereco,
        email: values.email,
        telefone: values.telefone
      });

      values.razaoSocial = '';
      values.cnpj = '';
      values.endereco = '';
      values.email = '';
      values.telefone = '';
      onHide();
    }
  });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Criar Fornecedor</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-5">
            <Form.Label for='razaoSocial'>Razão Social</Form.Label>
            <Form.Control name='razaoSocial' id="razaoSocial" type="text" placeholder="Razão Social" value={formik.values.razaoSocial} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='cnpj'>CNPJ</Form.Label>
            <Form.Control name='cnpj' id="cnpj" type="number" placeholder="CNPJ do Fornecedor (apenas números)" value={formik.values.cnpj} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='endereco'>Endereço</Form.Label>
            <Form.Control name='endereco' id="endereco" type="text" placeholder="Endereço do Fornecedor" value={formik.values.endereco} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='email'>Email</Form.Label>
            <Form.Control name='email' id="email" type="email" placeholder="Email do Fornecedor" value={formik.values.email} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='telefone'>Telefone</Form.Label>
            <Form.Control name='telefone' id="telefone" type="text" placeholder="Telefone do Fornecedor com DDD (apenas números)" value={formik.values.telefone} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group>
            <Button variant="success" type="submit" style={{ marginRight: 15 }}>Salvar</Button>
            <Button variant="danger" type="reset" onClick={formik.handleReset}>Limpar</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCreateFornecedor;