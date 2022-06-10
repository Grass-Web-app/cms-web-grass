import styled from "styled-components";

export const DivLeftNavContainer = styled.div`
  grid-area: ${(props) => props.area};
  background: #c7e6fa;
  display: ${(props) => (props.show === "false" ? "none" : "flex")};
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 5%;
  padding-bottom: 5%;
  @media (min-width: 1020px) {
    display: flex;
  }
`;
export const CloseMenu = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  right: 16px;
  top: 16px;
  margin: auto;
  @media (min-width: 1020px) {
    display: none;
  }
`;
export const DivImgLogo = styled.div`
  width: 50%;
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: auto;
`;

export const DivOptions = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTextOption = styled.div`
  border-radius: 50px;
  display: flex;
  background: ${(props) => (props.bg === "true" ? "#C7E6FA" : "white")};
  cursor: pointer;
  justify-content: space-around;
`;

export const PText = styled.p`
  margin-left: 5%;
  font-size: 1rem;
`;

export const DivImgIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

export const DivImgArrow = styled.div`
  height: 100%;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
`;

export const ImgRightArrow = styled.img`
  height: 45%;
  width: auto;
`;

export const ImgIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const DivOptionsCenter = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DivMarcasText = styled.div`
  width: 100%;
`;

export const PMarkTextq = styled.p`
  width: 100%;
  text-align: center;
  margin: 0;
`;

export const PCloseSession = styled.p`
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 1000px;
  background: #124759;
  color: white;
  @media (min-width: 1020px) {
    display: none;
  }
`;
