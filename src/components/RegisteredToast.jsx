import { Toast, ToastContainer } from 'react-bootstrap';
import styled from 'styled-components';

export const RegisteredToast = ({show, onClose}) => {
    return (
        <ToastContainer position='center'>
            <Toast onClose={onClose} show={show} delay={3000} autohide >
                <ToastHeader>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                </ToastHeader>
                <ToastBody style={{ color: "black" }}>Successfully Registered </ToastBody>
            </Toast>
        </ToastContainer>
    )
}

const ToastHeader = styled(Toast.Header)`
    display: flex;
    justify-content: right;
`
const ToastBody = styled(Toast.Body)`
    text-align: center;
`

