import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  Img,
  Row,
  Col,
  Text,
  NavAction,
} from "../../assets/Elements";

import {
  DotsIcon,
  LikeIcon,
  CommentIcon,
  SendIcon,
  SaveIcon
} from "../Breadcrumbs/Icons";

import Avatars from "../Breadcrumbs/Avatars";

function Card() {
  return (
    <CardContainer>
      <CardContent>
        <Row pl={10} pr={10}>
          <Col size="6">
            <Avatars size="md" bordered={true} />
          </Col>
          <Col size="50">
            <Text>Jhon Doe</Text>
          </Col>
          <Col>
            <DotsIcon fill="white" />
          </Col>
        </Row>
        <CardImage>
          <Img src="https://conteudo.imguol.com.br/c/noticias/a2/2021/08/30/instagram-para-ios-iphone-1630359767684_v2_1x1.jpg" />
        </CardImage>
        <Row pl={10} pr={10}>
          <Col>
            <NavAction>
              <LikeIcon fill="white" />
              <CommentIcon color="white" />
              <SendIcon fill="white" />
            </NavAction>
          </Col>
          <Col>
            <SaveIcon color="white" />
          </Col>
        </Row>
      </CardContent>
    </CardContainer>
  );
}
export default Card;
