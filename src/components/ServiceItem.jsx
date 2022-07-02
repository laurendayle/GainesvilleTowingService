import { useRef } from "react";
import styled from "styled-components";
import Placeholder from "../assets/placeholder.png";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Service = ({ props }) => {
  return (
    <ServiceContainer>
      <Image src={Placeholder} fluid={true}/>
      <ServiceDescription>
        <Link to="/forms" >{props.title}</Link>
      </ServiceDescription>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 40vh;
  margin: 10px;
  font-family: 'Poppins';
`;

const Img = styled.img`
  z-index: 1;
  height: 80%;
  width: 85%;
`;

const ServiceDescription = styled.div`
  z-index: 2;
  background-color: white;
  border: 1px solid lightgray;
  width: 70%;
  /* height: 100px; */
  position: relative;
  top: -35px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: content;
  flex-shrink: 2;
  padding: 15px;
`;

export default Service;
