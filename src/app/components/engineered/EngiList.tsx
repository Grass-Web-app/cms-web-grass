import React from "react";
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

const EngiList = (props: {
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
        <PWhere>Lista de Engineered</PWhere>
      </DivAddNew>
      <DivListOptions>
        <DivUpperList>
          <PtitleUpper>#Numero</PtitleUpper>
          <PtitleUpper>Title</PtitleUpper>
          <PtitleUpper>Subtitle</PtitleUpper>
          <PtitleUpper>Description</PtitleUpper>
          <PtitleUpper></PtitleUpper>
        </DivUpperList>
      </DivListOptions>
    </DivContainerCatalog>
  );
};

export default EngiList;
