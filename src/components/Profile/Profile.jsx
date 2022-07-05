import React, { useState } from "react";
import {
  ProfileContainer,
  Box,
  BoxContainer,
  Row,
  Col,
  BoxText,
  ContentModal,
} from "../../assets/Elements";
import Avatars from "../Breadcrumbs/Avatars";
import Buttons from "../Buttons/Button";
import { FollowIcon, DotsIcon } from "../Breadcrumbs/Icons";
import Modal from "../Modals/Modal";
import Followers from "../Modals/Contents/Followers";
import Followed from "../Modals/Contents/Followed";

function Profile() {
  const [stateModalFollowers, setStateModalFollowers] = useState(false);
  const [stateModalFollowed, setStateModalFollowed] = useState(false);
  return (
    <ProfileContainer>
      <Box>
        <Avatars width={"10rem"} height={"10rem"} />
      </Box>
      <Box>
        <BoxContainer>
          <Row border="transparent">
            <Col>
              <h2>John Doe</h2>
            </Col>
            <Col>
              <Buttons
                color="#fff"
                background="transparent"
                border="#424242"
                name="Enviar Mensaje"
              />
            </Col>
            <Col>
              <Buttons
                color="#fff"
                background="transparent"
                border="#424242"
                name={<FollowIcon />}
              />
            </Col>
            <Col>
              <DotsIcon />
            </Col>
          </Row>
        </BoxContainer>
        <BoxContainer>
          <Row border="transparent">
            <Col>
              <BoxText>
                <h2>
                  <strong>2</strong> publicaciones
                </h2>
              </BoxText>
            </Col>
            <Col>
              <BoxText>
                <h2>
                  <strong>8</strong>{" "}
                  <Buttons
                    onClick={() => setStateModalFollowers(!stateModalFollowers)}
                    margin="10px 0 0 0"
                    color="#fff"
                    active="transparent"
                    border="transparent"
                    background="transparent"
                    name={<h2>seguidores</h2>}
                  />
                </h2>
              </BoxText>
            </Col>
            <Col>
              <BoxText>
                <h2>
                  <strong>10</strong>{" "}
                  <Buttons
                    onClick={() => setStateModalFollowed(!stateModalFollowed)}
                    margin="10px 0 0 0"
                    color="#fff"
                    active="transparent"
                    border="transparent"
                    background="transparent"
                    name={<h2>seguidos</h2>}
                  />
                </h2>
              </BoxText>
            </Col>
          </Row>
        </BoxContainer>
        <BoxContainer>
          <Row border="transparent">
            <BoxText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              voluptatibus sequi architecto dicta consequatur officia earum iure
              pariatur esse fugiat.
            </BoxText>
          </Row>
        </BoxContainer>
      </Box>
      <Modal
        state={stateModalFollowers}
        changeState={setStateModalFollowers}
        title="Seguidores"
        showHeader={true}
        showOverlay={true}
        positionModal={"center"}
      >
        <ContentModal>
          {/* Reutilizable */}
          <Followers />
        </ContentModal>
      </Modal>
      <Modal
        state={stateModalFollowed}
        changeState={setStateModalFollowed}
        title="Seguidos"
        showHeader={true}
        showOverlay={true}
        positionModal={"center"}
      >
        <ContentModal>
          {/* Reutilizable */}
          <Followed />
        </ContentModal>
      </Modal>
    </ProfileContainer>
  );
}
export default Profile;
