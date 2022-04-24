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
interface IDataApi {
  data: { data: IDataCards[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCards {
  description: string;
  id: number;
  image: string;
  subtitle: string;
  title: string;
}

const CardsList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: IDataCards) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [CardList, setCardList] = useState<IDataCards[]>([]);
  const { Get } = useAxiosGet("big-cards/", {
    completeInterceptor: {
      action: (data: IDataApi) => {
        setCardList(data.data.data);
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
        <ButtonAddList disabled={CardList.length === 2} onClick={handleNewData}>
          <TextAdd>Agregar nueva</TextAdd>
          <DivIcon>
            <ImgIcon
              alt="icon"
              src={require("../../../../assets/icons/mas.svg")}
            />
          </DivIcon>
        </ButtonAddList>
        <PWhere>Lista de Cards</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper></PtitleUpper>
        </DivUpperList>
        {CardList.length !== 0 &&
          CardList.map((item: IDataCards, index: number) => {
            let bottom = false;
            if (CardList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"big-cards/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.image}
                  setcatalog={() => setData(item)}
                />
              </DivUpperList>
            );
          })}
      </DivListOptions>
    </DivContainerCatalog>
  );
};
export default CardsList;
