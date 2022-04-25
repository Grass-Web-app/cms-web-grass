import styled from "styled-components";

const borderRed = `
  border-style: solid;
  border-width: 1px;
  border-color: red;
`;

export const DivContainerFormCatalog = styled.div`
  padding: 2%;
`;

export const DivFormulary = styled.div`
  border-radius: 15px;

  background: white;
  padding: 1%;
  height: 100%;
  overflow: scroll;
`;

export const ButtonBackArrow = styled.button`
  border: none;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 35px;
  font-size: 2rem;
  cursor: pointer;
  background: transparent;
  border-radius: 15px;
  &:hover {
    background: #ddfaeb;
  }
`;

export const ImgIconArrow = styled.img`
  height: 80%;
  width: auto;
`;
export const HR = styled.hr`
  color: grey;
`;

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ButtonAceptarCancel = styled.button`
  width: 48%;
  height: 35px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  opacity: ${(props) => props.disabled === "true" && "0.5"};
`;

export const DivInputContainer = styled.div`
  margin-top: 10px;
  position: relative;
`;

export const PObligatory = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
  position: absolute;
  color: red;
  width: 100%;
  text-align: right;
  display: ${(props) => props.show === "false" && "none"};
  z-index: 5;
`;
export const PText = styled.p``;

export const InputNormal = styled.input`
  height: 100%;
  width: 100%;
  height: 35px;
  background: #ddebe1;
  border-radius: 10px;
  outline: none;
  border: none;
  padding-left: 15px;
  ${(props) => props.show === "true" && borderRed}
`;
export const InputDescription = styled.textarea`
  height: 100%;
  width: 100%;
  height: 70px;
  background: #ddebe1;
  border-radius: 10px;
  outline: none;
  border: none;
  padding-left: 15px;
  ${(props) => props.show === "true" && borderRed}
`;

export const InputImg = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  z-index: 10;
`;

export const DivImgFormulary = styled.div`
  overflow: hidden;
  background: #ddebe1;
  margin-top: 10px;
  height: 150px;
  border-radius: 15px;
  position: relative;
  ${(props) => props.show === "true" && borderRed}
`;

export const DivImgCloud = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgCloud = styled.img`
  height: 85%;
`;

export const HavePicture = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 7;
`;
export const ImgFile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivCatalogOptions = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  background: white;
  position: absolute;
  top: 110%;
  margin: auto;
  width: 100%;
  z-index: 20;
  display: ${(props) => props.show === "false" && "none"};
  overflow: hidden;
`;

export const PoptionCatalogue = styled.p`
  padding: 0;
  margin: 0;
  padding-left: 10px;
  &:hover {
    background: grey;
    cursor: pointer;
    color: white;
  }
`;

export const DivBenefitOpcion = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  height: 2rem;
  margin-bottom: 10px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
`;
export const Pbenefit = styled.p`
  margin: 0;
  padding: 0;
`;

export const DivImgBenefitOption = styled.div`
  cursor: pointer;
  height: 70%;
  margin-left: 10px;
`;

export const ImgBenefit = styled.img`
  height: 100%;
  width: auto;
`;
