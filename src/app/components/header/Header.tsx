import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DivHeaderContainer,
  DivImgAvatar,
  DivTitle,
  ImgAvatar,
} from "./styledheader";

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
