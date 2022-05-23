import { useRouter } from "next/router";
import React from "react";
import { prefix } from "../../../pages/_app";
import { useAppDispatch } from "../../Reduxhooks";
import { handleToken } from "../ReduxSlices/CookiesSlice";
import { HandleMenuMobile } from "../ReduxSlices/counterSlice";
import {
  CloseMenu,
  DivImgArrow,
  DivImgIcon,
  DivImgLogo,
  DivLeftNavContainer,
  DivMarcasText,
  DivOptions,
  DivOptionsCenter,
  DivTextOption,
  ImgIcon,
  ImgLogo,
  ImgRightArrow,
  PCloseSession,
  PMarkTextq,
  PText,
} from "./styledleftnav";

interface optionsModel {
  title: string;
  icon: string;
  link: string;
}
const OptionsNAvigation = [
  {
    title: "Catalogo",
    icon: require("../../../../assets/icons/carpeta.svg"),
    link: "/catalog",
  },
  {
    title: "Engineered",
    icon: require("../../../../assets/icons/archivo.svg"),
    link: "/engineered",
  },
  {
    title: "Parallax",
    icon: require("../../../../assets/icons/marcaginas.svg"),
    link: "/parallax",
  },
  {
    title: "Carousel",
    icon: require("../../../../assets/icons/parati.svg"),
    link: "/carousel",
  },
  {
    title: "Cards",
    icon: require("../../../../assets/icons/caja.svg"),
    link: "/cards",
  },
  {
    title: "Footer",
    icon: require("../../../../assets/icons/voluta.svg"),
    link: "/footer",
  },
];

const LeftNav = (props: { area: string; show: boolean }) => {
  const { area, show } = props;
  const dispatch = useAppDispatch();
  const { pathname, push } = useRouter();
  const HandleNav = (path: string) => {
    push(path);
  };

  const handleCloseMenu = () => {
    dispatch(HandleMenuMobile());
  };

  const ClickToLink = (link: string) => {
    handleCloseMenu();
    HandleNav(link);
  };

  const CloseSession = () => {
    dispatch(handleToken({ access: "", refresh: "" }));
    handleCloseMenu();
    push("/login");
  };
  return (
    <DivLeftNavContainer area={area} show={show.toString()}>
      <DivImgLogo>
        <ImgLogo
          alt="logo"
          src={prefix + require("../../../../assets/image/logo.png")}
        />
      </DivImgLogo>
      <CloseMenu onClick={handleCloseMenu}>X</CloseMenu>
      <DivOptions>
        <DivOptionsCenter>
          {OptionsNAvigation.map((item: optionsModel, index: number) => {
            const { title, icon, link } = item;
            let background = false;
            if (pathname.includes(link)) background = true;
            return (
              <DivTextOption
                onClick={() => ClickToLink(link)}
                key={index}
                bg={background.toString()}
              >
                <DivImgIcon>
                  <ImgIcon alt="icon" src={icon} />
                </DivImgIcon>
                <PText>{title}</PText>
                <DivImgArrow>
                  {!background && (
                    <ImgRightArrow
                      alt="arrow"
                      src={require("../../../../assets/icons/leftArrow.svg")}
                    />
                  )}
                </DivImgArrow>
              </DivTextOption>
            );
          })}
        </DivOptionsCenter>
      </DivOptions>
      <PCloseSession onClick={CloseSession}>Cerrar sesion</PCloseSession>
      <DivMarcasText>
        <PMarkTextq>Fustadesing</PMarkTextq>
        <PMarkTextq>All right reserved</PMarkTextq>
      </DivMarcasText>
    </DivLeftNavContainer>
  );
};

export default LeftNav;
