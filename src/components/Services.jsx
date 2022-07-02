import { servicesInfo } from '../utils/servicesInfo';
import Service from './ServiceItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Services = () => {

  const setDisplay = () => {

  }

  return (
    <Container className="page">
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
  width: 100%;
  height: 100%;
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceDescription = styled.div`
  height: 30vh;
  width: 40vw;
  min-height: ;
  min-width: 40vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.8em;
  min-width: 400px;
`;

const ServiceContainer = styled.div`
  display: flex;
  margin: 10px;
  background: #f2f2f2;
  box-shadow: 0 0 20px 8px #d0d0d0;
  border-top: 3px solid gray;
  border-radius: 3px;
  align-items: center;
`;

export default Services;