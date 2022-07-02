import styled from 'styled-components';
// import TruckImg from '../../../dist/assets/truck-nobg.jpg';
import Placeholder from '../assets/placeholder.png';
// import Image from 'react-bootstrap/Image';
import Service from './ServiceItem';
import { servicesInfo } from '../utils/servicesInfo';
import AdditionalServices from './AdditionalServices';

const Home = () => {


  return (
    <Container className="page">
      <UpperFold>
      <ImageBackground>
          <Img src={Placeholder} alt=""/>
        </ImageBackground>
        <Description className="container">
        Looking for a Roadside Assistance company that you can trust? Look no further. All service technicians undergo an extensive background process. We perform many Roadside Services. Please check our Services menu!
        </Description>

      </UpperFold>

      <ServicesList className="services-container-home">
        {servicesInfo.map((item) => (
          <Service key={item.title} props={item} />
        ))}
      </ServicesList>
      {/* <AdditionalServices/> */}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: auto;
`;

const Description = styled.div`
  height: auto;
  width: 100%:
  max-height: 200px;
  min-width: 200px;

  @media(min-width: 390px) {
    width: 90vw;
  }
`;

const UpperFold = styled.div`
  /* height: 70%; */
  /* max-height: 70vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-height: 40vh; */
  width: auto;

  /* @media(min-width: 390px) and (max-width: 599px) {
    flex-direction: column;
    width: auto;
    height: min-content;
  } */

  @media(min-width: 390px) and (max-width: 765px) {
    flex-direction: column;
    align-items: center;

    /* width: 90vw; */
  }
`;

const ImageBackground = styled.div`
  display: flex;
  background-color: lightgray;
  /* width: 45%; */
  text-align: center;
  height: 100%;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* height: 40vh; */
  margin-top: 20px;

  /* @media(min-width: 390px) and (max-width: 599px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
  } */

  @media(min-width: 390px) and (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }

`;

export default Home;