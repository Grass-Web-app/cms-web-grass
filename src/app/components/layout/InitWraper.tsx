import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
import { prefix } from "../../../pages/_app";
import LeftNav from "../LeftNav/LeftNav";
import Header from "../header/Header";
import {
  DivBgBlackModal,
  DivInitWraperContainer,
  DivLateralMenu,
} from "./stylesinitwraper";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import { Token } from "../ReduxSlices/CookiesSlice";
import {
  HandleMenuMobile,
  MenuMobileBurguer,
} from "../ReduxSlices/counterSlice";

const HeaderFooterWraper = ({ children }) => {
  const MenuBur = useAppSelector(MenuMobileBurguer);
  const [opa, setOpa] = useState(false);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const token = useAppSelector(Token);
  const { Get } = useAxiosGet("users/my-profile/", {
    completeInterceptor: {
      action: () => {
        setOpa(true);
      },
    },
    errorInterceptor: {
      action: () => {
        push("/login");
      },
    },
  });
  useEffect(() => {
    if (token.access !== "" && token.refresh !== "") {
      Get(token.access);
    } else push("/login");
  }, []);

  return (
    <DivInitWraperContainer opa={opa.toString()}>
      <GlobalStyle />
      <BodyColorChange />
      <DivBgBlackModal
        show={MenuBur.toString()}
        onClick={() => dispatch(HandleMenuMobile())}
      ></DivBgBlackModal>
      <DivLateralMenu show={MenuBur.toString()}>
        <LeftNav area="left" show={true} />
      </DivLateralMenu>
      <Head>
        <title>CMS-Fustadesign</title>
        <link
          rel="icon"
          href={prefix + require("../../../../public/pasto.png")}
        />
      </Head>
      <Header area="nav" />
      {children}
      <LeftNav area="left" show={false} />
    </DivInitWraperContainer>
  );
};

export default HeaderFooterWraper;
