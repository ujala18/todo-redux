import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleRoutes = (route) => {
    navigate(route);
  };

  return (
    <Navbar expand="lg" className="bg-dark p-2">
      <Container fluid>
        <Navbar.Brand onClick={() => handleRoutes("/")} className="text-white-50">
        
         
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}  
            navbarScroll
          >
            <Nav.Link className="text-white" onClick={() => handleRoutes("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => handleRoutes("/cart")}
            >
              Cart
            </Nav.Link>
          </Nav>

          {/* Dropdown for sorting */}
          <DropdownButton
            id="dropdown-sort"
            title="Sort By"
            variant="outline-light"
            className="me-3"
          >
            <Dropdown.Item href="#">Price: Low to High</Dropdown.Item>
            <Dropdown.Item href="#">Price: High to Low</Dropdown.Item>
            <Dropdown.Item href="#">Rating</Dropdown.Item>
            <Dropdown.Item href="#">Name</Dropdown.Item>
          </DropdownButton>

          {/* Dropdown for filtering */}
          <DropdownButton
            id="dropdown-filter"
            title="Filter"
            variant="outline-light"
            className="me-3"
          >
            <Dropdown.Item href="#">Fruit </Dropdown.Item>
            <Dropdown.Item href="#">Fruit </Dropdown.Item>
            <Dropdown.Item href="#">Fruit</Dropdown.Item>
            <Dropdown.Item href="#">Fruit</Dropdown.Item>
          </DropdownButton>

          {/* Search Bar */}
          <Form className="d-flex">
            <Form.Control
              type="search Me"
              placeholder="Search for fruit"
              className="me-2"
              aria-label="Search  Our Fruit"
            />
            <Button variant="outline-success">Search Me</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
