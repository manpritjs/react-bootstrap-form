//import logo from './logo.svg';
import './App.css';

import {Container, Row, Col, Button, Form, Stack} from 'react-bootstrap';



function BasicForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function ContainerFluidExample() { 
  return (
    <Container fluid>
      <Row className='vh-100'>
        <Col className= "bg-light-blue" >
          <Row className="h-100 align-items-center">
            <Col md={{ span:8, offset: 2}} >
              <Stack>
                <BasicForm/>
              </Stack>
            </Col>
          </Row>  
        </Col>
        <Col className='bg-light-grey'>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;