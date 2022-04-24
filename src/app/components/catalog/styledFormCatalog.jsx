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
  overflow: hidden;
  background: white;
  padding: 1%;
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
