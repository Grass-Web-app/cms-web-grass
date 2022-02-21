import styled from "styled-components";

export const DivHeaderContainer = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  background: #C7E6FA;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const DivTitle = styled.div`
  width: 30%;
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
  display: flex;
  justify-content: space-around;
  position: relative;
`;

export const PUser = styled.p`
  text-align: center;
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
  display: flex;
  cursor: pointer;
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
`;

export const Poptions = styled.p`
  text-align: start;
  padding-left: 3%;
  margin: 0;
  height: 30px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #c0b7ef;
  }
`;
