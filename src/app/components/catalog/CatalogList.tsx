import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import { Token } from "../ReduxSlices/CookiesSlice";
import Catalog from "./Catalog";
import {
  DivAddNew,
  DivContainerCatalog,
  DivIcon,
  ButtonAddList,
  ImgIcon,
  TextAdd,
  DivListOptions,
  DivUpperList,
  PtitleUpper,
  PWhere,
} from "./styledCatalog";
interface ICatalogListData {
  data: {
    code: number;
    data: IcatalogOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IcatalogOnlyList {
  description: string;
  icon: string;
  id: number;
  subtitle: string;
  title: string;
}
const CatalogList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: IcatalogOnlyList) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [CatalogList, setCatalogList] = useState<IcatalogOnlyList[]>([]);
  const { Get } = useAxiosGet("grasses/", {
    completeInterceptor: {
      action: (data: ICatalogListData) => {
        setCatalogList(data.data.data);
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
        <ButtonAddList onClick={handleNewData}>
          <TextAdd>Agregar nueva</TextAdd>
          <DivIcon>
            <ImgIcon
              alt="icon"
              src={require("../../../../assets/icons/mas.svg")}
            />
          </DivIcon>
        </ButtonAddList>
        <PWhere>Lista de Catalogo</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {CatalogList.length !== 0 &&
          false &&
          CatalogList.map((item: IcatalogOnlyList, index: number) => {
            let bottom = false;
            if (CatalogList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"grasses/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                  setcatalog={() => setData(item)}
                />
              </DivUpperList>
            );
          })}
      </DivListOptions>
    </DivContainerCatalog>
  );
};

export default CatalogList;
