import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  Img,
} from "../../assets/Elements";

import Avatars from "../Breadcrumbs/Avatars";

function Card() {
  return (
    <CardContainer>
      <CardContent>
        <Avatars size="md" bordered={true} />
        <CardImage>
          <Img src="https://conteudo.imguol.com.br/c/noticias/a2/2021/08/30/instagram-para-ios-iphone-1630359767684_v2_1x1.jpg" />
        </CardImage>
      </CardContent>
    </CardContainer>
  );
}
export default Card;
