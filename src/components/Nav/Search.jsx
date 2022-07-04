import React from "react";
import { SearchContainer, Row, Col } from "../../assets/Elements";
import { SearchIcon } from "../Breadcrumbs/Icons";
function Search() {
  return (
    <SearchContainer>
      <Row border="transparent">
        <Col size="1">
          <SearchIcon />
        </Col>
        <Col size="40">
          <input type="text" placeholder="Buscar" />
        </Col>
      </Row>
    </SearchContainer>
  );
}
export default Search;
