import { useRouter } from "next/router";
import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DivImgIcon,
  DivImgLogo,
  DivLeftNavContainer,
  DivMarcasText,
  DivOptions,
  DivOptionsCenter,
  DivTextOption,
  ImgIcon,
  ImgLogo,
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
    icon: require("../../../../assets/icons/marcapáginas.svg"),
    link: "/engineered",
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
  const HandleNav = (path) => {
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
                  <ImgIcon alt="icon" src={prefix + icon} />
                </DivImgIcon>
                <PText>{title}</PText>
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
