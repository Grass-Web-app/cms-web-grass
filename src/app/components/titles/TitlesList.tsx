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

interface ITitlesListData {
  data: {
    code: number;
    data: ITitlesOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface ITitlesOnlyList {
  carousel_subtitle: string;
  carousel_title: string;
  catalogue_subtitle: string;
  catalogue_title: string;
  grass_title: string;
  header_subtitle: string;
  header_title: string;
  id: number;
}

const TitlesList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: ITitlesOnlyList) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [FooterList, setFooterList] = useState<ITitlesOnlyList[]>([]);
  const { Get } = useAxiosGet("main/", {
    completeInterceptor: {
      action: (data: ITitlesListData) => {
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
        <ButtonAddList disabled={FooterList.length > 0} onClick={handleNewData}>
          <TextAdd>Agregar nueva</TextAdd>
          <DivIcon>
            <ImgIcon
              alt="icon"
              src={require("../../../../assets/icons/mas.svg")}
            />
          </DivIcon>
        </ButtonAddList>
        <PWhere>Lista de Titulos</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>SubTitle</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {FooterList.length !== 0 &&
          FooterList.map((item: ITitlesOnlyList, index: number) => {
            let bottom = false;
            if (FooterList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"main/"}
                  id={item.id}
                  title={item.header_title}
                  subtitle={item.header_subtitle}
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

export default TitlesList;
