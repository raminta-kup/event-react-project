import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";

export const DeleteBtnModal = ({ close, confirmation, modalShow }) => {

    return (
        <Modal show={modalShow} onHide={close} centered
            aria-labelledby="contained-modal-title-vcenter" >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
            <Modal.Footer>
                <StyledDeleteBtn variant='light' onClick={confirmation}>
                    Yes
                </StyledDeleteBtn>
                <StyledCloseBtn variant='light' onClick={close}>
                    Close
                </StyledCloseBtn>
            </Modal.Footer>
        </Modal>
    );
}

const StyledDeleteBtn = styled(Button)`
    background-color: #D08355;
    border: transparent;
    color: white;
    font-weight: 600;
  `
const StyledCloseBtn = styled(Button)`
    border: transparent;
    font-weight: 600;
    background-color: #979797;
    color: white;
  `


