import { useRef } from "react";
import styled from "styled-components";
import Placeholder from "../assets/placeholder.png";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Service = ({ props }) => {
  return (
    <ServiceContainer className="servicesItems-container">
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
  /* justify-content: center; */
  align-items: center;
  width: 30%;
  height: auto;
  margin: 10px;
  font-family: 'Poppins';

  /* @media(min-width: 390px) and (max-width: 599px) {
    flex-direction: column;
    width: 80%;
    align-items: center;
  } */

  @media(min-width: 390px) and (max-width: 765px) {
    flex-direction: column;
    width: 80%;
    align-items: center;
  }
`;

const Img = styled.img`
  z-index: 1;
  height: auto;
  width: 100%;
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
  text-align: center;
  /* flex-basis: content;
  flex-shrink: 2; */
  padding: 10px;

`;

export default Service;
