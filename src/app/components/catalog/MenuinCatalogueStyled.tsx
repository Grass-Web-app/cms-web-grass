import styled from "styled-components";
const Selected = `
  background: #286579;
  color: white;
`;
const Normal = `
  background: #E5E7EB;
  color: black;
  border-style: solid;
  border-width: 1px;
`;

export const DivContainerOptions = styled.div`
  width: fit-content;
  position: sticky;
  top: 0;
  z-index: 40;
  @media (min-width: 1020px) {
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    background: transparent;
  }
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
  position: absolute;
  transition: 1s;
  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 1000px;
  padding-left: 32px;
  padding-right: 32px;
  display: ${(props) => (props.show === "true" ? "inline" : "none")};
  left: 15px;
  top: ${(props) => props.top}px;
  margin: auto;
  ${(props) => (props.selected === "true" ? Selected : Normal)}
  @media (min-width: 1020px) {
    position: relative;
    margin: inherit;
    margin-left: 10px;
    top: auto;
    left: auto;
    display: inline;
  }
`;

export const ButtonShowOptions = styled.button`
  margin-left: 15px;
  margin-top: 15px;
  width: 35px;
  height: 35px;
  border-radius: 1000px;
  position: relative;
  @media (min-width: 1020px) {
    display: none;
  }
`;

export const PWho = styled.p`
  position: absolute;
  white-space: nowrap;
  left: 150%;
  top: 0;
  bottom: 0;
  margin: auto;
  display: ${(props) => (props.show === "false" ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  height: 40px;
  border: none;
  border-radius: 1000px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: 10px;
  ${Selected}
`;
