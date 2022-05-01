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
  id: number;
  title: string;
  subtitle: string;
  description: string;
}
const CatalogList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: IcatalogOnlyList) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [CatalogListState, setCatalogListState] = useState<IcatalogOnlyList[]>(
    []
  );
  const { Get } = useAxiosGet("catalogues/", {
    completeInterceptor: {
      action: (data: ICatalogListData) => {
        setCatalogListState(data.data.data);
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
        <DivUpperList icon={"false"} up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {CatalogListState.length !== 0 &&
          CatalogListState.map((item: IcatalogOnlyList, index: number) => {
            let bottom = false;
            if (CatalogListState.length === index + 1) bottom = true;
            return (
              <DivUpperList icon={"false"} bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"catalogues/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
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

export default CatalogList;
