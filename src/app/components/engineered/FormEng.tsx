import React, { useState } from "react";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivContainerFormCatalog,
  DivFormulary,
  DivInputContainer,
  HR,
  ImgIconArrow,
  InputDescription,
  InputNormal,
  PText,
} from "../catalog/styledFormCatalog";

const FormEng = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
}) => {
  const { stateNew, addNew } = props;

  return (
    <DivContainerFormCatalog>
      <DivFormulary>
        <ButtonBackArrow onClick={() => addNew(!stateNew)}>
          <ImgIconArrow
            alt="arrow"
            src={require("../../../../assets/icons/leftArrow.svg")}
          />
          Lista de Engineered
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Title</PText>
          <InputNormal />
        </DivInputContainer>
        <DivInputContainer>
          <PText>Subtitulo</PText>
          <InputNormal />
        </DivInputContainer>
        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription />
        </DivInputContainer>
        <DivButtons>
          <ButtonAceptarCancel onClick={() => addNew(!stateNew)}>
            Cancelar
          </ButtonAceptarCancel>
          <ButtonAceptarCancel onClick={() => addNew(!stateNew)}>
            Aceptar
          </ButtonAceptarCancel>
        </DivButtons>
      </DivFormulary>
    </DivContainerFormCatalog>
  );
};

export default FormEng;
