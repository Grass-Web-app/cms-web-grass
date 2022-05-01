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
interface IEngineeredListData {
  data: {
    code: number;
    data: IEngineredOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IEngineredOnlyList {
  description: string;
  icon: string;
  id: number;
  subtitle: string;
  title: string;
}
const EngiList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: any) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [EngineeredList, setEngineeredList] = useState<IEngineredOnlyList[]>(
    []
  );
  const { Get } = useAxiosGet("grasses/", {
    completeInterceptor: {
      action: (data: IEngineeredListData) => {
        setEngineeredList(data.data.data);
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
          disabled={EngineeredList.length > 5}
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
        <PWhere>Lista de Engineered</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {EngineeredList.length !== 0 &&
          EngineeredList.map((item: IEngineredOnlyList, index: number) => {
            let bottom = false;
            if (EngineeredList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"grasses/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
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

export default EngiList;
