import styled from "styled-components";

export const DivHeaderContainer = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  background: #c7e6fa;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const DivTitle = styled.div`
  display: none;
  @media (min-width: 1020px) {
    display: block;
  }
`;
export const PMobile = styled.h3`
  padding-left: 10px;
  @media (min-width: 1020px) {
    display: none;
  }
`;
export const DivBurguer = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  background: transparent;
  padding: 0;
  margin-right: 10px;
  @media (min-width: 1020px) {
    display: none;
  }
`;
export const Title = styled.h3`
  width: 100%;
`;

export const DivImgAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivUsuarioAvatar = styled.div`
  width: 20%;

  justify-content: space-around;
  position: relative;
  display: none;
  @media (min-width: 1020px) {
    display: flex;
  }
`;

export const PUser = styled.p`
  text-align: center;
  display: none;
  @media (min-width: 1020px) {
    display: block;
  }
`;
export const DivArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  ${(props) => props.state === "true" && "transform: rotate(180deg);"}
`;

export const ImgArrow = styled.img`
  width: 100%;
  height: auto;
`;

export const DivUserArrow = styled.div`
  cursor: pointer;
  display: none;
  @media (min-width: 1020px) {
    display: flex;
  }
`;

export const DivOptions = styled.div`
  ${(props) => props.show === "false" && "display: none;"}
  background: white;
  border-radius: 15px;
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 100%;
  overflow: hidden;
  z-index: 20;
`;

export const Poptions = styled.p`
  text-align: start;
  padding-left: 3%;
  margin: 0;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #c0b7ef;
  }
`;
