import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Fornecedor } from '../../types';

interface ModalEditFornecedorProps {
  show: Fornecedor,
  onHide: () => void,
  updateFornecedor: (id: number, fornecedor: Omit<Fornecedor, 'id'>) => void
};

const ModalEditFornecedor: React.FC<ModalEditFornecedorProps> = ({ show, onHide, updateFornecedor }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      razaoSocial: show.razaoSocial,
      cnpj: show.cnpj,
      endereco: show.endereco,
      email: show.email,
      telefone: show.telefone
    },
    onSubmit: values => {
      updateFornecedor(show.id, {
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
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Fornecedor</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-5">
            <Form.Label for='razaoSocial'>Razão Social</Form.Label>
            <Form.Control name='razaoSocial' id="razaoSocial" type="text" placeholder="Razão Social" value={formik.values.razaoSocial} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='cnpj'>CNPJ</Form.Label>
            <Form.Control name='cnpj' id="cnpj" type="text" placeholder="CNPJ do Fornecedor (apenas números)" value={formik.values.cnpj} onChange={formik.handleChange} />
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

export default ModalEditFornecedor;