import Home from "./Home";
import styled from "styled-components";
import Navigation from "./Navigation";
import Services from "./Services";
import ServicesForms from "./ServicesForms";
import About from "./About";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap';

const App = () => {

  const routes = [
    { path: '/', name: 'Home', element: <Home /> },
    { path: '/about', name: 'About Us', element: <About /> },
    { path: '/services', name: 'Services', element: <Services /> },
  ]
  return (
    <>
      <StyledNavbar bg="light" expand="sm" sticky="top" className="shadow-sm px-3">
        <Navbar.Brand
          as={NavLink}
          to={'/'}
        >Gainesville Towing Service</Navbar.Brand>
        <Nav>
          {routes.map(route => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              activeclassname="active"
              exact="true"
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>


      </StyledNavbar>
      <Container className="container">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
            {routes.map(({path, element}) => (
              <Route
                key={path}
                path={path}
                element={element}
              />
            ))}
            <Route
              path={'/forms'}
              element={<ServicesForms />}
            />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Container>
      <Footer>
        <div className="material-icons-sharp">location_on</div>
        <ContactInfo>2014 NE 23RD AVE. GAINESVILLE, FL 32609</ContactInfo><br/>
        <div className="material-icons-sharp">phone_enabled</div>
        <ContactInfo>352-336-0790</ContactInfo>
      </Footer>
    </>
  );
};

const AppContainer = styled.div`
  max-width: auto;
  max-height: 100%;
`;

const StyledNavbar = styled(Navbar)`
  justify-content: space-evenly;
`;

const ContactInfo = styled.div`
  margin: 3px;
`;

const Footer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 7vh;
  text-align: center;
  padding: 5px;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

export default App;
