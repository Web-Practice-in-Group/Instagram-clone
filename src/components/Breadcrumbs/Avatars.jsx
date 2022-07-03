import React from "react";
import { Avatar } from "@nextui-org/react";

function Avatars(props) {
  return (
    <>
      <Avatar
        bordered={false}
        color="#fff"
        src="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=robohash&f=y&s=128"
        size={props.size}
      />
    </>
  );
}
export default Avatars;
