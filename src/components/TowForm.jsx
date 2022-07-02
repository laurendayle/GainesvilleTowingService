import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import styled from "styled-components";

const TowForm = () => {
  return (
    <StyledForm>
      <FloatingLabel label="Name">
        <Form.Control type="text" />
      </FloatingLabel>

      <FloatingLabel label="Phone Number">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel label="Email">
        <Form.Control type="phone" />
      </FloatingLabel>


      <FloatingLabel
        label="Additional Information"
      >
        <Form.Control
          style={{ height: '200px' }}
          type="textarea"
          placeholder="Description, accident? que paso"
        />
      </FloatingLabel>

    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 70%;
  display: flex;
`;

export default TowForm;
