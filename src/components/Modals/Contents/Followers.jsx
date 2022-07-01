import React from "react";
import Avatars from "../../Breadcrumbs/Avatars";
import Button from "../../Buttons/Button";

import { Row, Col } from "../../../assets/Elements";

function Followers() {
  return (
    <Row border="transparent">
      <Col>
        <Row border="transparent">
          <Col>
            <Avatars />
          </Col>
          <Col>
            <h6>Jhon Doe</h6>
            <br />
            <p>jhondoe</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Button
          color="#fff"
          background="#0095f6"
          name="Seguir"
          border="transparent"
        />
      </Col>
    </Row>
  );
}
export default Followers;
