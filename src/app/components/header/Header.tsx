import { useRouter } from "next/router";
import React, { useState } from "react";
import { prefix } from "../../../pages/_app";
import { useAppDispatch, useAppSelector } from "../../Reduxhooks";
import { handleToken, Token } from "../ReduxSlices/CookiesSlice";
import {
  DivArrow,
  DivHeaderContainer,
  DivImgAvatar,
  DivOptions,
  DivTitle,
  DivUserArrow,
  DivUsuarioAvatar,
  ImgArrow,
  ImgAvatar,
  Poptions,
  PUser,
  Title,
} from "./styledheader";

const Header = (props: { area: string }) => {
  const { area } = props;
  const { push } = useRouter();
  const dispatch = useAppDispatch();

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
