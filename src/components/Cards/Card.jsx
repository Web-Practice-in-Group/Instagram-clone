import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  Img,
  Row,
  Col,
  NavAction,
  CardComment,
  CarsLetter,
  Comments,
  CardInput,
  CardHr,
  Like,
} from "../../assets/Elements";

import Buttons from "../Buttons/Button";

import {
  DotsIcon,
  LikesIcon,
  CommentIcon,
  SendIcon,
  SaveIcon,
  EmojiIcon,
} from "../Breadcrumbs/Icons";

import Avatars from "../Breadcrumbs/Avatars";

function Card({url}) {
  return (
    <CardContainer>
      <CardContent width={470} background="black">
        <Row pt={10} pl={10} pr={10} pb={5} border="transparent">
          <Col>
            <Row border="transparent">
              <Col>
                <Avatars width={"3rem"} height={"3rem"} />
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
          {/* <Img src="https://picsum.photos/1200" /> */}
          <Img src={url} />
        </CardImage>
        <Row pl={10} pr={10} border="transparent">
          <Col>
            <NavAction>
              <Like>
                <LikesIcon />
              </Like>
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
        <Row pl={10} pr={10} border="transparent">
          <CardComment>
            <h5>5 Me gusta</h5>
            <NavAction>
              <h5>
                Jhon Doe
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, sint dolore saepe suscipit aspernatur eaque quia
                  sequi commodi excepturi sapiente corporis ullam harum atque
                  cupiditate, ducimus facere nulla vitae similique!
                </p>
              </h5>
            </NavAction>
            <CarsLetter>
              <p>Hace 19 Minutos</p>
            </CarsLetter>
          </CardComment>
        </Row>
        <CardHr />
        <Row pl={10} pr={10} border="transparent">
          <Col>
            <Comments>
              <EmojiIcon fill="white" />
              <CardInput type="text" placeholder="Agrega un comentario..." />
            </Comments>
          </Col>
          <Col>
            <NavAction>
              <Buttons
                color="#0095f6"
                background="transparent"
                name="Publicar"
                border="transparent"
              />
            </NavAction>
          </Col>
        </Row>
      </CardContent>
    </CardContainer>
  );
}
export default Card;
