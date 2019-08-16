import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component } from 'react';
import AddProduct from './AddProduct';

function AddProductModal() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="button-3" variant="secondary" onClick={handleShow}>
          + Agregar Producto
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingrese Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddProduct /></Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddProductModal;