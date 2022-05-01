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
    data: ICardCarouselOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface ICardCarouselOnlyList {
  benefits: string;
  catalogue: number;
  description: string;
  id: number;
  subtitle: string;
  title: string;
}
const CardCarouselList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: ICardCarouselOnlyList) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [CardCarouselState, setCardCarouselState] = useState<
    ICardCarouselOnlyList[]
  >([]);
  const { Get } = useAxiosGet("catalogues/big-card-carousel/", {
    completeInterceptor: {
      action: (data: IData) => {
        setCardCarouselState(data.data.data);
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
        <PWhere>Lista de Cards Carousel</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList icon={"false"} up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>#Catalogo</PtitleUpper>
          <PtitleUpper>Options</PtitleUpper>
        </DivUpperList>
        {CardCarouselState.length !== 0 &&
          CardCarouselState.map(
            (item: ICardCarouselOnlyList, index: number) => {
              let bottom = false;
              if (CardCarouselState.length === index + 1) bottom = true;
              return (
                <DivUpperList
                  icon={"false"}
                  bot={bottom.toString()}
                  key={item.id}
                >
                  <Catalog
                    endpointErase={"catalogues/big-card-carousel/"}
                    id={item.id}
                    title={item.title}
                    subtitle={`#${item.catalogue}`}
                    icon={null}
                    setcatalog={() => setData(item)}
                    fnErase={() => Get(token.access)}
                  />
                </DivUpperList>
              );
            }
          )}
      </DivListOptions>
    </DivContainerCatalog>
  );
};

export default CardCarouselList;
