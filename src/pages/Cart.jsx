import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; 
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4"></h1>
      {cart.length === 0 ? (
        <h4 className="text-center"></h4>
      ) : (
        <Row>
          <Col>
            <ListGroup>
              {cart.map((product, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex justify-content-between">
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
      <div className="d-flex justify-content-between mt-5">
        <Button variant="dark">Click Me</Button>
        <Button variant="dark">Click Me</Button>
      </div>
    </Container>
  );
};

export default Cart;
