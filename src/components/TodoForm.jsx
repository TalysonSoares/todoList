import { useState, useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      setFormSubmitted(true);
      return;
    }

    addTodo(value, category);
    setValue('');
    setCategory('');
    handleClose();
  };

  useEffect(() => {
    if (formSubmitted && value && category) {
      setFormSubmitted(false);
    }
  }, [value, category, formSubmitted]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" className='btn-custom' onClick={handleShow}>Nova tarefa</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Tarefa:</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Categoria:</Form.Label>
              <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
              </Form.Control>
            </Form.Group>
            {formSubmitted && (
              <Alert variant="danger">Por favor, preencha todos os campos.</Alert>
            )}
            <Button variant="outline-primary" className="btn-custom" type="submit">Criar tarefa</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoForm;
