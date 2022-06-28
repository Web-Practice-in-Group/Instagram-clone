// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// ?Iconos

import { Col, Row, ContainerNav, LogoNav} from "../../assets/Elements";

function Navigation() {
  const [mode, setMode] = useState();

  if (mode == undefined) {
    setMode("black");
  }

  return (
    <ContainerNav style={{ alignItems: "center" }}>
      <Row>
        <Col size={1}>
         <LogoNav>a</LogoNav>
        </Col>                     
      </Row>      
    </ContainerNav>
  );
}

export default Navigation;
