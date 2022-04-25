import styled from "styled-components";
const fondo = `
  background: green;
  color: white;
`;

export const DivContainerOptions = styled.div`
  display: flex;
  padding-top: 5px;
  position: sticky;
  top: 0;
  z-index:10 ;
`;
export const DivButtonsContainer = styled.div`
  height: 100%;
  overflow: scroll;
`;
export const DivListContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;
export const ButtonOptions = styled.button`
  width: fit-content;
  margin-left: 10px;
  ${(props) => props.selected === "true" && fondo}
`;
