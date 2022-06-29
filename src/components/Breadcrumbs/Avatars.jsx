import React from "react";
import { Avatar } from "@nextui-org/react";

function Avatars(props) {
  return (
    <>
      <Avatar
        bordered={props.bordered}
        color="gradient"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        size={props.size}
      />
    </>
  );
}
export default Avatars;
