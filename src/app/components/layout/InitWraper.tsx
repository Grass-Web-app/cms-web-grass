import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
import { prefix } from "../../../pages/_app";
import LeftNav from "../LeftNav/LeftNav";
import Header from "../header/Header";
import { DivInitWraperContainer } from "./stylesinitwraper";

const HeaderFooterWraper = ({ children }) => {
  return (
    <DivInitWraperContainer>
      <GlobalStyle />
      <BodyColorChange />
      <Head>
        <title>El Hector</title>
        <link
          rel="icon"
          href={prefix + require("../../../../public/logo.svg")}
        />
      </Head>
      <Header area="nav" />
      jjj{prefix}
      {children}
      <LeftNav area="left" />
    </DivInitWraperContainer>
  );
};

export default HeaderFooterWraper;
