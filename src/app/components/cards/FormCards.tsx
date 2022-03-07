import React, { useState } from "react";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivContainerFormCatalog,
  DivFormulary,
  DivImgCloud,
  DivImgFormulary,
  DivInputContainer,
  HavePicture,
  HR,
  ImgCloud,
  ImgFile,
  ImgIconArrow,
  InputDescription,
  InputImg,
  InputNormal,
  PText,
} from "../catalog/styledFormCatalog";

const FormCards = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
}) => {
  const { stateNew, addNew } = props;
  const [file, setFile] = useState<null | any>(null);
  return (
    <DivContainerFormCatalog>
      <DivFormulary>
        <ButtonBackArrow onClick={() => addNew(!stateNew)}>
          <ImgIconArrow
            alt="arrow"
            src={require("../../../../assets/icons/leftArrow.svg")}
          />
          Lista de Cards
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Title</PText>
          <InputNormal />
        </DivInputContainer>
        <DivInputContainer>
          <PText>Sub Title</PText>
          <InputNormal />
        </DivInputContainer>
        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription />
        </DivInputContainer>
        <DivInputContainer>
          <PText>Imagen</PText>
          <DivImgFormulary>
            {file !== null ? (
              <HavePicture>
                <ImgFile alt="file" src={URL.createObjectURL(file[0])} />
              </HavePicture>
            ) : (
              <DivImgCloud>
                <ImgCloud
                  alt="cloud"
                  src={require("../../../../assets/icons/nube.svg")}
                />
              </DivImgCloud>
            )}
            <InputImg
              type="file"
              onChange={(e: any) => setFile(e.target.files)}
            />
          </DivImgFormulary>
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
export default FormCards;