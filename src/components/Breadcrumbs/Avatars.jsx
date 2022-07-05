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
          <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=female" />
        </AvatarCircle>
      </AvatarContainer>
    </>
  );
}
export default Avatars;
