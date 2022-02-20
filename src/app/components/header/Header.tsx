import React from "react";

import {
  DivHeaderContainer,
  DivImgAvatar,
  DivTitle,
  ImgAvatar,
} from "./styledheader";
const prefix = process.env.BASE_PATH || "ano coso";

const Header = (props: { area: string }) => {
  const { area } = props;
  return (
    <DivHeaderContainer area={area}>
      <DivTitle> CMS grass prefix:{prefix}</DivTitle>
      <DivImgAvatar>
        <ImgAvatar
          alt="avatar"
          src={prefix + require("../../../../assets/image/grass.jpeg")}
        />
      </DivImgAvatar>
    </DivHeaderContainer>
  );
};

export default Header;
