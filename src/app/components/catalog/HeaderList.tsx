import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import { Token } from "../ReduxSlices/CookiesSlice";
import Catalog from "./Catalog";
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
} from "./styledCatalog";
interface IData {
  data: {
    code: number;
    data: IHeaderOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IHeaderOnlyList {
  catalogue: number;
  id: number;
  picture: string;
  title: string;
}

const HeaderList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: any) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [HeaderListState, setHeaderListState] = useState<IHeaderOnlyList[]>([]);
  const { Get } = useAxiosGet("catalogues/headers/", {
    completeInterceptor: {
      action: (data: IData) => {
        setHeaderListState(data.data.data);
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
        <PWhere>Lista de Headers</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>#Catalogo</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {HeaderListState.length !== 0 &&
          HeaderListState.map((item: IHeaderOnlyList, index: number) => {
            let bottom = false;
            if (HeaderListState.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"catalogues/headers/"}
                  id={item.id}
                  title={item.title}
                  subtitle={`#${item.catalogue}`}
                  icon={item.picture}
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

export default HeaderList;
