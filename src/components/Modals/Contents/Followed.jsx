import React from "react";
import Avatars from "../../Breadcrumbs/Avatars";
import Button from "../../Buttons/Button";

import { Row, Col } from "../../../assets/Elements";

function Followed() {
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
          background="transparent"
          name="Eliminar"
          border="#424242"
        />
      </Col>
    </Row>
  );
}
export default Followed;
