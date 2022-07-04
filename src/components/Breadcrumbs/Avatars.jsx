import React from "react";

import {
  AvatarContainer,
  AvatarCircle,
  AvatarImage,
} from "../../assets/Elements";

function Avatars(props) {
  return (
    <>
      <AvatarContainer width={props.width} height={props.height}>
        <AvatarCircle>
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </AvatarCircle>
      </AvatarContainer>
    </>
  );
}
export default Avatars;
