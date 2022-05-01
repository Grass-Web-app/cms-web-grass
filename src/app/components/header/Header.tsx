import { useRouter } from "next/router";
import React, { useState } from "react";

import { prefix } from "../../../pages/_app";
import { useAppDispatch } from "../../Reduxhooks";
import { handleToken } from "../ReduxSlices/CookiesSlice";
import { HandleMenuMobile } from "../ReduxSlices/counterSlice";
import {
  DivArrow,
  DivBurguer,
  DivHeaderContainer,
  DivImgAvatar,
  DivOptions,
  DivTitle,
  DivUserArrow,
  DivUsuarioAvatar,
  ImgArrow,
  ImgAvatar,
  PMobile,
  Poptions,
  PUser,
  Title,
} from "./styledheader";

const Header = (props: { area: string }) => {
  const dispatch = useAppDispatch();
  const { area } = props;
  const { push } = useRouter();

  const [arrow, setArrow] = useState(false);
  const [options, setOptions] = useState(false);

  const handleOptions = () => {
    setArrow(!arrow);
    setOptions(!options);
  };
  const selectOptions = (option: string) => {
    switch (option) {
      case "closeSesion":
        dispatch(handleToken({ access: "", refresh: "" }));
        push("/login");
        break;

      default:
        close();
        break;
    }
  };
  const close = () => {
    setArrow(false);
    setOptions(false);
  };
  return (
    <DivHeaderContainer area={area}>
      <DivTitle>
        <Title>Bienvenido al cms</Title>
      </DivTitle>
      <PMobile>Bienvenido al cms</PMobile>
      <DivBurguer onClick={() => dispatch(HandleMenuMobile())}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={require("../../../../assets/icons/menuMobile.svg")}
        />
      </DivBurguer>
      <DivUsuarioAvatar>
        <PUser>Fustadesing</PUser>
        <DivUserArrow onClick={handleOptions}>
          <DivImgAvatar>
            <ImgAvatar
              alt="avatar"
              src={prefix + require("../../../../assets/image/grass.jpeg")}
            />
          </DivImgAvatar>
          <DivArrow state={arrow.toString()}>
            <ImgArrow
              alr="arrow"
              src={require("../../../../assets/icons/downArrow.svg")}
            />
          </DivArrow>
        </DivUserArrow>
        <DivOptions show={options.toString()}>
          <Poptions onClick={() => selectOptions("cuenta")}>
            Ver mi cuenta
          </Poptions>
          <Poptions onClick={() => selectOptions("closeSesion")}>
            Cerrar sesion
          </Poptions>
        </DivOptions>
      </DivUsuarioAvatar>
    </DivHeaderContainer>
  );
};

export default Header;
