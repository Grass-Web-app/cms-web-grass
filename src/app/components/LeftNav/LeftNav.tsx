import React from "react";
import { DivLeftNavContainer } from "./styledleftnav";

const LeftNav = (props: { area: string }) => {
  const { area } = props;
  return <DivLeftNavContainer area={area}>LeftNav</DivLeftNavContainer>;
};

export default LeftNav;
