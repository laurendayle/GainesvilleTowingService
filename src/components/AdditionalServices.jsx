
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import styled from 'styled-components';

const AdditionalServices = () => {
  return (
    <StyledToastContainer position="bottom-end">
      <Toast >
        <Toast.Header>Need something we don't have listed?</Toast.Header>
      </Toast>
    </StyledToastContainer>
  )
}

const StyledToastContainer = styled(ToastContainer)`
  z-index: 3;
  margin: 10px;
  position: sticky;

`;

export default AdditionalServices;