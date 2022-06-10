import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import Catalog from "../catalog/Catalog";
import {
  ButtonAddList,
  DivAddNew,
  DivContainerCatalog,
  DivIcon,
  DivListOptions,
  DivUpperList,
  ImgIcon,
  PtitleUpper,
  PWhere,
  TextAdd,
} from "../catalog/styledCatalog";
import useAxiosGet from "../Hooks/useAxiosGet";
import { Token } from "../ReduxSlices/CookiesSlice";

interface IFooterListData {
  data: {
    code: number;
    data: IFooterOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IFooterOnlyList {
  additional: string;
  address: string;
  cell_phone: string;
  facebook: string;
  have_facebook: boolean;
  have_instagram: boolean;
  have_linkedIn: boolean;
  have_pinterest: boolean;
  have_twitter: boolean;
  have_youtube: boolean;
  id: number;
  instagram: string;
  linkedIn: string;
  local_phone: string;
  name: string;
  pinterest: string;
  twitter: string;
  youtube: string;
}

const FooterList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: IFooterOnlyList) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [FooterList, setFooterList] = useState<IFooterOnlyList[]>([]);
  const { Get } = useAxiosGet("footer/", {
    completeInterceptor: {
      action: (data: IFooterListData) => {
        setFooterList(data.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    if (token.access !== "" && token.refresh !== "") {
      Get(token.access);
    }
  }, []);

  const handleNewData = () => {
    setData(null);
    addNew(!stateNew);
  };
  return (
    <DivContainerCatalog>
      <DivAddNew>
        <ButtonAddList
          disabled={FooterList.length > 0}
          onClick={handleNewData}
        >
          <TextAdd>Agregar nueva</TextAdd>
          <DivIcon>
            <ImgIcon
              alt="icon"
              src={require("../../../../assets/icons/mas.svg")}
            />
          </DivIcon>
        </ButtonAddList>
        <PWhere>Lista de Footer</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Name</PtitleUpper>
          <PtitleUpper>Email</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {FooterList.length !== 0 &&
          FooterList.map((item: IFooterOnlyList, index: number) => {
            let bottom = false;
            if (FooterList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"footer/"}
                  id={item.id}
                  title={item.name}
                  subtitle={item.address}
                  icon={null}
                  setcatalog={() => setData(item)}
                  fnErase={() => Get(token.access)}
                />
              </DivUpperList>
            );
          })}
      </DivListOptions>
    </DivContainerCatalog>
  );
};

export default FooterList;
