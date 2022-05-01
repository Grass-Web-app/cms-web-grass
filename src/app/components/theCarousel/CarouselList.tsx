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
  data: { data: IDataCarousels[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCarousels {
  id: number;
  image: string;
  description: string;
  title: string;
}

const CarouselList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  setData: (dat: any) => void;
}) => {
  const { addNew, stateNew, setData } = props;
  const token = useAppSelector(Token);
  const [CarouselList, setCarouselList] = useState<IDataCarousels[]>([]);
  const { Get } = useAxiosGet("carousels/", {
    completeInterceptor: {
      action: (data: IDataApi) => {
        setCarouselList(data.data.data);
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
        <PWhere>Lista de Carousel</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList up>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>Description</PtitleUpper>
          <PtitleUpper>opciones</PtitleUpper>
        </DivUpperList>
        {CarouselList.length !== 0 &&
          CarouselList.map((item: IDataCarousels, index: number) => {
            let bottom = false;
            if (CarouselList.length === index + 1) bottom = true;
            return (
              <DivUpperList bot={bottom.toString()} key={item.id}>
                <Catalog
                  endpointErase={"carousels/"}
                  id={item.id}
                  title={item.title}
                  subtitle={item.description}
                  icon={item.image}
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

export default CarouselList;
