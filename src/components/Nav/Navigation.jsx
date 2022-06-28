// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// ?Iconos

import { Grid, Row, Col } from "../../assets/Elements";

function Navigation() {
  const [mode, setMode] = useState();

  if (mode == undefined) {
    setMode("black");
  }

  return (
    <Grid>
      <Row>
        <Col size={1} style={{ border: "1px solid red" }}>
          1
        </Col>
        <Col size={2} style={{ border: "1px solid red" }}>
          2
        </Col>
        <Col size={1} collapse="xs" style={{ border: "1px solid red" }}>
          disabled
        </Col>
        <Col size={1} style={{ border: "1px solid red" }}>
          1
        </Col>
      </Row>
    </Grid>
  );
}

export default Navigation;
