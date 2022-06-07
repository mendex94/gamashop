import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Entregas } from '../../types';

interface ModalCreateEntregaProps {
  show: Entregas,
  onHide: () => void,
  createEntrega: (Entregas: Omit<Entregas, 'id'>) => void
};

const ModalCreateEntrega: React.FC<ModalCreateEntregaProps> = ({ show, onHide, createEntrega }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      transportadora: '',
      cnpj: '',
      endereco: '',
      email: '',
      telefone: ''
    },
    onSubmit: values => {
      createEntrega({
        transportadora: values.transportadora,
        cnpj: values.cnpj,
        endereco: values.endereco,
        email: values.email,
        telefone: values.telefone
      });

      values.transportadora = '';
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
        <Modal.Title>Editar Entregas</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-5">
            <Form.Label for='transportadora'>Transportadora</Form.Label>
            <Form.Control name='transportadora' id="transportadora" type="text" placeholder="Razão Social" value={formik.values.transportadora} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='cnpj'>CNPJ</Form.Label>
            <Form.Control name='cnpj' id="cnpj" type="text" placeholder="CNPJ da Entrega (apenas números)" value={formik.values.cnpj} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='endereco'>Endereço</Form.Label>
            <Form.Control name='endereco' id="endereco" type="text" placeholder="Endereço de Entrega" value={formik.values.endereco} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='email'>Email</Form.Label>
            <Form.Control name='email' id="email" type="email" placeholder="Email de Entrega" value={formik.values.email} onChange={formik.handleChange} />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label for='telefone'>Telefone</Form.Label>
            <Form.Control name='telefone' id="telefone" type="text" placeholder="Telefone com DDD (apenas números)" value={formik.values.telefone} onChange={formik.handleChange} />
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

export default ModalCreateEntrega;