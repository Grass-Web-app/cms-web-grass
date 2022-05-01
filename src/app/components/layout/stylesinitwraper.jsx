import styled from "styled-components";

export const DivInitWraperContainer = styled.div`
  opacity: ${(props) => (props.opa === "true" ? "1" : "0")};
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "nav"
    ".";

  @media (min-width: 1020px) {
    grid-template-columns: 15% 85%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
      "left nav"
      "left .";
  }
`;

export const DivBgBlackModal = styled.div`
  display: ${(props) => props.show === "false" && "none"};
  position: absolute;
  left: 0;
  top: 0;
  margin: auto;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  @media (min-width: 1020px) {
    display: none;
  }
`;

export const DivLateralMenu = styled.div`
  display: ${(props) => props.show === "false" && "none"};
  background: white;
  width: 300px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: auto;
  z-index: 60;
  @media (min-width: 1020px) {
    display: none;
  }
`;
