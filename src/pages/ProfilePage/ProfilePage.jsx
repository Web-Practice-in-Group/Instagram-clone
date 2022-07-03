import React, { useState } from "react";
import Modal from "../../components/Modals/Modal";
import Buttons from "../../components/Buttons/Button";
import Followers from "../../components/Modals/Contents/Followers";
import Followed from "../../components/Modals/Contents/Followed";

import { ContentModal } from "../../assets/Elements";

function ProfilePage() {
  const [stateModalFollowers, setStateModalFollowers] = useState(false);
  const [stateModalFollowed, setStateModalFollowed] = useState(false);
  return (
    <div>
      <h1>ProfilePage</h1>
      <>
        {/* Followers */}
        <Buttons
          onClick={() => setStateModalFollowers(!stateModalFollowers)}
          margin="10px 0 0 0"
          color="#fff"
          active="transparent"
          border="transparent"
          background="transparent"
          name="Followers"
        />
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
            <Followers />
            <Followers />
            <Followers />
            <Followers />
            <Followers />
            <Followers />
          </ContentModal>
        </Modal>
        {/* Followed */}
        <Buttons
          onClick={() => setStateModalFollowed(!stateModalFollowed)}
          margin="10px 0 0 0"
          color="#fff"
          active="transparent"
          border="transparent"
          background="transparent"
          name="Followed"
        />
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
      </>

    </div>
  );
}
export default ProfilePage;
