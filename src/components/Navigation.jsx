import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const styles = {
    textDecoration: "none",
    color: "black",
    margin: "15px",
  };

  return (
    <ListContainer className="shadow-sm">
      <div>Gainesville Towing Service</div>
        <ListItem>
          <Link style={styles} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" style={styles}>
            About Us
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/services" style={styles}>
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contac" style={styles}>
            Contact Us
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/testimonials" style={styles}>
            Testimonials
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/joinGTS" style={styles}>
            Join Our Team
          </Link>
        </ListItem>
    </ListContainer>
  );
};
const ListContainer = styled.div`
  background-color: lightgray;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 10px;
  list-style: none;
  z-index: 5;

`;



// const StyledNav = styled(NavBar)`
//   padding: 15px;
//   min-height: 70px;
//   background-color: rgb(211, 211, 211);
//   position: fixed;
//   width: 100%;
//   max-height: 70px;
// `;

// const StyledLink = styled(Nav.Link)`
//   color: inherit;
//   cursor: pointer;
// `;

const ListItem = styled.li``;

export default Navigation;
