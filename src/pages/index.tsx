import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HeaderFooterWraper from "../app/components/layout/InitWraper";

const IndexPage = () => {
  const { push, pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") push("/catalog");
  }, []);

  return (
    <HeaderFooterWraper>
      <></>
    </HeaderFooterWraper>
  );
};

export default IndexPage;
