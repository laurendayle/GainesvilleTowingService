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
    { path: '/forms', name: 'Services Forms', element: <ServicesForms />}
  ]
  return (
    <>
      {/* <Navigation /> */}
      <Navbar bg="light">
        <Nav className="mx-auto">
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
      </Navbar>
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
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </>
  );
};
const AppContainer = styled.div`
  max-width: 100vw;
  max-height: min-content;

`;

export default App;
