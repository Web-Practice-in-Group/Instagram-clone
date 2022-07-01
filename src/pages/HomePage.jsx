import React, { useState } from "react";
import Card from "../components/Cards/Card";
import Modal from "../components/Modals/Modal";
import Buttons from "../components/Buttons/Button";
import { ContentModal } from "../assets/Elements";
import Followers from "../components/Modals/Contents/Followers";

function HomePage() {
  const [stateModal, setStateModal] = useState(false);
  return (
    <div>
      <Card />
      <Buttons
        onClick={() => setStateModal(!stateModal)}
        margin="10px 0 0 0"
        color="#fff"
        active="#333"
        border="#424242"
        background="transparent"
        name="click!"
      />
      <Modal
        state={stateModal}
        changeState={setStateModal}
        title="Seguidores"
        showHeader={true}
        showOverlay={true}
        positionModal={"center"}
      >
        <ContentModal>
          {/* Reutilizable */}
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
        </ContentModal>
      </Modal>
    </div>
  );
}
export default HomePage;
