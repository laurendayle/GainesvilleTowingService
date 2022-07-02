import styled from 'styled-components';
// import TruckImg from '../../../dist/assets/truck-nobg.jpg';
import Placeholder from '../assets/placeholder.png';
// import Image from 'react-bootstrap/Image';
import Service from './ServiceItem';
import { servicesInfo } from '../utils/servicesInfo';

const Home = () => {


  return (
    <Container className="page">
      <UpperFold>
        <Description className="container">
        Looking for a Roadside Assistance company that you can trust? Look no further. All service technicians undergo an extensive background process. We perform many Roadside Services. Please check our Services menu!
        </Description>
        <ImageBackground>
          <Img src={Placeholder} alt=""/>
        </ImageBackground>
      </UpperFold>

      <ServicesList>
        {servicesInfo.map((item) => (
          <Service key={item.title} props={item} />
        ))}
      </ServicesList>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Description = styled.div`
  height: 30vh;
  width: 30vw;
  position: relative;
  top: 100px;
  max-height: 35vh;
`;

const UpperFold = styled.div`
  height: 65vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageBackground = styled.div`
  display: flex;
  background-color: lightgray;
  width: 45%;
  text-align: center;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* height: 40vh; */
  width: 100%;
  margin-top: 20px;

`;
export default Home;