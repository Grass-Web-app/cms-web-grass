import styled from "styled-components";

const upperTops = `
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  `;

const upperBottom = `
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  `;
export const DivContainerCatalog = styled.div``;

export const DivAddNew = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const PWhere = styled.p`
  font-size: 1.5vw;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const ButtonAddList = styled.button`
  background: white;
  border-color: red;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  width: fit-content;
  cursor: pointer;
  box-shadow: 2px 5px 5px grey;
  border: none;
`;

export const TextAdd = styled.p`
  padding-right: 5%;
  white-space: nowrap;
`;
export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vh;
`;

export const ImgIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const DivListOptions = styled.div`
  height: 100%;
  margin-left: 4%;
  margin-right: 4%;
  height: fit-content;
  border-radius: 15px;
`;
export const DivUpperList = styled.div`
  display: grid;
  grid-template-columns: 20%20%20%20%20%;
  background: white;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #dbe6fa;
  height: ${(props) => (props.up ? "50" : "100")}px;
  ${(props) => props.up && upperTops}
  ${(props) => props.bot === "true" && upperBottom}
`;

export const PtitleUpper = styled.p`
  text-align: center;
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DivImgImglist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  align-self: center;
  overflow: hidden;
`;

export const ImgShowInList = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
export const DivIconOptionsContainer = styled.div`
  width: auto;
  height: 25%;
  padding: 1%;
  border-radius: 15px;
  position: relative;
  &:hover {
    background: #f0f0f0;
  }
`;
export const ImgShowOptions = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;

export const DivTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const DivOptions = styled.div`
  background: white;
  position: absolute;
  border-radius: 16px;
  left: -100px;
  top: 100%;
  margin: auto;
  overflow: hidden;
  width: 200px;
  height: 50px;
  border-color: #f1f1f1;
  border-style: solid;
  border-width: 1px;
  z-index: 10;
  display: ${(props) => (props.show === "false" ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-around;
`;

export const POption = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background: #f0f0f0;
  }
`;

export const SpanOption = styled.span`
  padding-left: 5px;
  height: 15px;
`;
