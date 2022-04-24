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
interface IParallListData {
  data: {
    code: number;
    data: IparallaxOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IparallaxOnlyList {
  description: string;
  id: number;
  title: string;
}
const ParallaxList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: any) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [ParallaxList, setParallaxList] = useState<IparallaxOnlyList[]>([]);
  const { Get } = useAxiosGet("parallax/", {
    completeInterceptor: {
      action: (data: IParallListData) => {
        setParallaxList(data.data.data);
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
          disabled={ParallaxList.length === 1}
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
        {ParallaxList.length !== 0 &&
          ParallaxList.map((item: IparallaxOnlyList, index: number) => {
            let bottom = false;
            if (ParallaxList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"parallax/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.description}
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

export default ParallaxList;
