import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { Container, Row, Col } from "./components/Grid"

function App() {
  return (
    <div>
      <Container>
      <Navbar />
      <Header />
      
        <Row>
          <Col size="1">
            <p>123</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
