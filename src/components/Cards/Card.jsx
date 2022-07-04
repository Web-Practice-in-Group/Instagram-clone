import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  Img,
  Row,
  Col,
  NavAction,
} from "../../assets/Elements";

import {
  DotsIcon,
  LikeIcon,
  CommentIcon,
  SendIcon,
  SaveIcon,
} from "../Breadcrumbs/Icons";


import Avatars from "../Breadcrumbs/Avatars";

function Card() {

  return (
    <CardContainer>
      <CardContent width={470} background="black">
        <Row pt={10} pl={10} pr={10} border="transparent">
          <Col>
            <Row border="transparent">
              <Col>
                <Avatars width={"3rem"} height={"3rem"}/>
              </Col>
              <Col>
                <h6>Jhon Doe</h6>
                <br />
                <p>jhondoe</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <DotsIcon fill="white" />
          </Col>
        </Row>

        <CardImage>
          <Img src="https://picsum.photos/500?grayscale" />
        </CardImage>
        <Row pl={10} pr={10} border="transparent">
          <Col>
            <NavAction>
              <LikeIcon fill="white" />
              <CommentIcon color="white" />
              <SendIcon fill="white" />
            </NavAction>
          </Col>
          <Col>
            <NavAction>
              <SaveIcon color="white" />
            </NavAction>
          </Col>
        </Row>
        <br />
        {/* <Row pl={10} pr={10} border="transparent">
          <Col>hello</Col>
        </Row> */}
      </CardContent>
    </CardContainer>
  );
}
export default Card;
