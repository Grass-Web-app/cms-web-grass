import styled from "styled-components";

export const DivHeaderContainer = styled.div`
  grid-area: ${(props) => props.area};
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
`;

export const DivTitle = styled.div`
  border-style: solid;
  border-width: 1px;
  width: 10%;
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
