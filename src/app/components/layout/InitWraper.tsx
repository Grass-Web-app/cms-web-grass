import React, { useEffect } from "react";
import Head from "next/head";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
import { prefix } from "../../../pages/_app";
import LeftNav from "../LeftNav/LeftNav";
import Header from "../header/Header";
import { DivInitWraperContainer } from "./stylesinitwraper";
import { useRouter } from "next/router";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import { Token } from "../ReduxSlices/CookiesSlice";

const HeaderFooterWraper = ({ children }) => {
  const { push } = useRouter();
  const token = useAppSelector(Token);
  const { Get } = useAxiosGet("users/my-profile/", {
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
      {children}
      <LeftNav area="left" />
    </DivInitWraperContainer>
  );
};

export default HeaderFooterWraper;
