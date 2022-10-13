import {
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Modal,
    Col,
    FormGroup,
  } from 'reactstrap';

  import { useRef } from 'react';
  

const VerifyModal = ({modal, toggle, unmountOnClose, verifyCode}) => {

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        verifyCode(inputRef.current.value)
    }

    return(
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
            <form onSubmit={handleSubmit}>
                <ModalHeader toggle={toggle}>Saissir le code de vérification recu par sms</ModalHeader>
                <ModalBody className='d-flex flex-column align-items-center justify-content-center'>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Code de vérification"
                                ></input>
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                <Button type="submit">
                    Vérifer
                </Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}

export default VerifyModal;