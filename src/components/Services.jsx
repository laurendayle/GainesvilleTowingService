import { servicesInfo } from '../utils/servicesInfo';
import Service from './ServiceItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AAAMemberModal from './MemberModal';
import { useState, useEffect } from 'react';

const Services = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setShowModal(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const handleModalClose = (e) => {
    setShowModal(false);
  }

  return (
    <Container className="page services-container">
      <AAAMemberModal showModal={showModal} handleModalClose={handleModalClose} />
      {servicesInfo.map((item, i) => (
        <ServiceContainer>
          <Service key={`${item.title}i`} props={item}/>
          <ServiceDescription className="container">{item.description}</ServiceDescription>
        </ServiceContainer>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: auto;
  height: 100%;
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: 390px) and (max-width: 599px) {
    padding-top: 0px;
  }
`;

const ServiceDescription = styled.div`
  height: auto;
  width: 60%;
  /* min-width: 40vw; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.8em;
  /* min-width: 400px; */

  @media(min-width: 390px) and (max-width: 599px) {
    flex-direction: column;
    width: auto;
    height: min-content;
  }

`;

const ServiceContainer = styled.div`
  display: flex;
  margin: 10px;
  background: #f2f2f2;
  box-shadow: 0 0 20px 8px #d0d0d0;
  border-top: 3px solid gray;
  border-radius: 3px;
  align-items: center;

  @media(min-width: 390px) and (max-width: 599px) {
    flex-direction: column;
    width: 90vw;
    height: min-content;
  }

`;

export default Services;