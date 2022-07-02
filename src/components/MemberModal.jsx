import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const AAAMemberModal = ({handleModalClose, showModal}) => {


  return (
    <StyledModal show={showModal} >
      <Modal.Header closeButton onClick={handleModalClose}>
        <Modal.Title>Are you a AAA member?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          GTS is a local AAA service provider for roadside assistance, which
          means we cannot create AAA service requests on your behalf.
        </p>
        <p>
          We can provide quick access to get you what you need. Just choose an
          option below so we can direct your request to the appropriate service
          provider.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleModalClose}>
          Contact AAA
        </Button>
        <Button variant="secondary" onClick={handleModalClose}>
          I'd like a non-AAA tow
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  text-align: center;
`;

export default AAAMemberModal;
