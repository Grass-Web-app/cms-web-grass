import { useRouter } from "next/router";
import React from "react";
import { prefix } from "../../../pages/_app";
import {
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
    title: "Dashboard",
    icon: require("../../../../assets/icons/casa.svg"),
    link: "/dashboard",
  },
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
];

const LeftNav = (props: { area: string }) => {
  const { area } = props;
  const { pathname, push } = useRouter();
  const HandleNav = (path: string) => {
    push(path);
  };
  return (
    <DivLeftNavContainer area={area}>
      <DivImgLogo>
        <ImgLogo
          alt="logo"
          src={prefix + require("../../../../assets/image/logo.png")}
        />
      </DivImgLogo>
      <DivOptions>
        <DivOptionsCenter>
          {OptionsNAvigation.map((item: optionsModel, index: number) => {
            const { title, icon, link } = item;
            let background = false;
            if (pathname.includes(link)) background = true;
            return (
              <DivTextOption
                onClick={() => HandleNav(link)}
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
      <DivMarcasText>
        <PMarkTextq>Fustadesing</PMarkTextq>
        <PMarkTextq>All right reserved</PMarkTextq>
      </DivMarcasText>
    </DivLeftNavContainer>
  );
};

export default LeftNav;
