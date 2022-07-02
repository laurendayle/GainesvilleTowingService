import styled from "styled-components";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TowForm from "./TowForm";

const ServicesForms = () => {
  return (
    <Container className="page">
      <InnerContainer className="container">
      <Tabs>

        <Tab eventKey="towing" title="Towing">

          <TowForm />

        </Tab>

        <Tab eventKey="battery" title="Battery Service">
          content
        </Tab>

        <Tab eventKey="lockout" title="Lockout">
          content
        </Tab>

      </Tabs>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 70px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 70vw;
`;




export default ServicesForms;
