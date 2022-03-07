import React from "react";
import { prefix } from "../../../pages/_app";
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
  DivImgImglist,
  ImgShowInList,
  DivTextContainer,
  ImgShowOptions,
  DivIconOptionsContainer,
  PWhere,
} from "./styledCatalog";
const CatalogList = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
}) => {
  const { addNew, stateNew } = props;

  return (
    <DivContainerCatalog>
      <DivAddNew>
        <ButtonAddList onClick={() => addNew(!stateNew)}>
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
        <DivUpperList>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Picture</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper></PtitleUpper>
        </DivUpperList>
        <DivUpperList>
          <DivTextContainer>
            <PtitleUpper>#1</PtitleUpper>
          </DivTextContainer>
          <DivTextContainer>
            <PtitleUpper>Golf</PtitleUpper>
          </DivTextContainer>
          <DivImgImglist>
            <ImgShowInList
              alt="image"
              src={prefix + require("../../../../assets/image/grass.jpeg")}
            />
          </DivImgImglist>

          <DivTextContainer>
            <PtitleUpper>
              Tour quality golf Tour quality golf Tour quality golf Tour quality
              golf{" "}
            </PtitleUpper>
          </DivTextContainer>
          <DivTextContainer>
            <DivIconOptionsContainer>
              <ImgShowOptions
                alt="image"
                src={require("../../../../assets/image/options.png")}
              />
            </DivIconOptionsContainer>
          </DivTextContainer>
        </DivUpperList>
        <DivUpperList>
          <DivTextContainer>
            <PtitleUpper>#2</PtitleUpper>
          </DivTextContainer>
          <DivTextContainer>
            <PtitleUpper>Park</PtitleUpper>
          </DivTextContainer>
          <DivImgImglist>
            <ImgShowInList
              alt="image"
              src={prefix + require("../../../../assets/image/grass.jpeg")}
            />
          </DivImgImglist>

          <DivTextContainer>
            <PtitleUpper>
              Tour quality golf Tour quality golf Tour quality golf Tour quality
              golf{" "}
            </PtitleUpper>
          </DivTextContainer>
          <DivTextContainer>
            <DivIconOptionsContainer>
              <ImgShowOptions
                alt="image"
                src={require("../../../../assets/image/options.png")}
              />
            </DivIconOptionsContainer>
          </DivTextContainer>
        </DivUpperList>
      </DivListOptions>
    </DivContainerCatalog>
  );
};

export default CatalogList;
