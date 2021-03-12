import React from "react";
import { Container, Row, Col } from "../components/Grid";
import SearchBar from "../components/SearchBar"

function Search() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="12">
            <p>Book Search</p>
            <p>Book</p>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Search;